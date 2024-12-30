import styled from "styled-components";

const ButtonIcon = styled.button`
    background: none;
    border: none;
    border-radius: var(--border-radius-sm);
    padding: 10px;
    transition: all 0.25s;

    &:hover {
        background-color: var(--color-grey-100);
    }

    & svg {
        color: var(--color-brand-600);
        height: 27px;
        width: 27px;
    }
`;

export default ButtonIcon;