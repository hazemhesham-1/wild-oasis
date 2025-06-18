import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useFocusOut } from "../hooks/useFocusOut";

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const StyledToggle = styled.button`
    background: none;
    border: none;
    border-radius: var(--border-radius-sm);
    padding: 4px;
    transform: translateX(14px);
    transition: all 0.25s;

    &:hover {
        background-color: var(--color-grey-100);
    };
    & svg {
        color: var(--color-grey-700);
        height: 26px;
        width: 26px;
    };
`;

const StyledList = styled.ul`
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-md);
    position: fixed;
    right: ${(props) => props.$position.x}px;
    top: ${(props) => props.$position.y}px;
    box-shadow: var(--shadow-md);
`;

const StyledButton = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 26px;
    padding: 16px 32px;
    width: 100%;
    font-size: 16px;
    text-align: left;
    transition: all 0.25s;

    &:hover {
        background-color: var(--color-grey-50);
    };
    & svg {
        color: var(--color-grey-400);
        height: 26px;
        width: 26px;
        transition: all 0.25s;
    };
`;

const MenusContext = createContext();

const Menus = ({ children }) => {
    const [openId, setOpenId] = useState("");
    const [position, setPosition] = useState(null);

    const open = setOpenId;
    const close = () => setOpenId("");

    return (
        <MenusContext.Provider value={{openId, open, close, position, setPosition}}>
            {children}
        </MenusContext.Provider>
    );
};

function Toggle({ id }) {
    const {openId, open, close, setPosition} = useContext(MenusContext);

    function handleClick(e) {
        e.stopPropagation();
        const rect = e.target.closest("button").getBoundingClientRect();
        setPosition({
            x: window.innerWidth - rect.width - rect.x,
            y: rect.height + rect.y - 5
        });

        if(openId === "" || openId !== id) {
            open(id);
        }
        else {
            close();
        }
    }

    return (
        <StyledToggle onClick={handleClick}>
            <HiEllipsisVertical/>
        </StyledToggle>
    );
};

function List({ children, id }) {
    const { openId, close, position } = useContext(MenusContext);
    const ref = useFocusOut(close, false);

    if(openId !== id) return null;

    return createPortal(
        <StyledList $position={position} ref={ref}>{children}</StyledList>,
        document.body
    );
};

function Button({ children, icon, onClick }) {
    const { close } = useContext(MenusContext);

    function handleClick() {
        onClick?.();
        close();
    }

    return (
        <li>
            <StyledButton onClick={handleClick}>
                {icon}<span>{children}</span>
            </StyledButton>
        </li>
    );
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

Menus.propTypes = {
    children: PropTypes.any,
};
Toggle.propTypes = {
    id: PropTypes.number,
};
List.propTypes = {
    children: PropTypes.any,
    id: PropTypes.number,
};
Button.propTypes = {
    children: PropTypes.any,
    icon: PropTypes.any,
    onClick: PropTypes.func,
};

export default Menus;