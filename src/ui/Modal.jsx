import { createPortal } from 'react-dom';
import PropTypes from "prop-types";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { device } from '../styles/breakpoints';
import { cloneElement, createContext, useContext, useState } from 'react';
import { useFocusOut } from '../hooks/useFocusOut';

const StyledModal = styled.div`
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    width: calc(100vw - 24px);
    max-height: calc(100vh - 24px);
    max-width: 768px;
    padding: 48px 32px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow-y: auto;
    transition: all 0.5s;

    @media ${device.md} {
        padding: 48px 64px;
    }
`;

const Overlay = styled.div`
    background-color: var(--backdrop-color);
    height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    backdrop-filter: blur(3px);
    transition: all 0.5s;
`;

const Button = styled.button`
    background: none;
    border: none;
    border-radius: var(--border-radius-sm);
    position: absolute;
    right: 28px;
    top: 20px;
    padding: 5px;
    transition: all 0.3s;

    &:hover {
        background-color: var(--color-grey-100);
    }

    & svg {
        color: var(--color-grey-500);
        height: 36px;
        width: 36px;
    }
`;

const ModalContext = createContext();

function Modal({ children }) {
    const [openName, setOpenName] = useState("");

    const open = setOpenName;
    const close = () => setOpenName("");
    return (
        <ModalContext.Provider value={{open, close, openName}}>
            {children}
        </ModalContext.Provider>
    );
}

function Window({ children, name }) {
    const { openName, close } = useContext(ModalContext);
    const ref = useFocusOut(close);

    if(name !== openName) return null;

    return createPortal(
        <Overlay>
            <StyledModal ref={ref}>
                {cloneElement(children, {onModalClose: close})}
                <Button onClick={close}><HiXMark/></Button>
            </StyledModal>
        </Overlay>,
        document.body
    );
}

function Open({ children, opens: openWindowName }) {
    const { open } = useContext(ModalContext);
    return cloneElement(children, {onClick: () => open(openWindowName)});
}

Modal.Window = Window;
Modal.Open = Open;

Modal.propTypes = {
    children: PropTypes.any,
};

Window.propTypes = {
    children: PropTypes.any,
    name: PropTypes.string,
};

export default Modal;