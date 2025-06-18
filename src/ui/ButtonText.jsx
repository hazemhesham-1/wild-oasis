import styled from "styled-components";

const ButtonText = styled.button`
    background: none;
    color: var(--color-brand-600);
    border: none;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    transition: all 0.25s;

    &:active, &:hover {
        color: var(--color-brand-700);
    };
`;

export default ButtonText;