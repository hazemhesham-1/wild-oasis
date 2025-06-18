import { styled, css } from "styled-components";

const sizes = {
    small: css`
        padding: 6px 10px;
        text-align: center;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 600;
    `,
    medium: css`
        padding: 10px 18px;
        font-size: 16px;
        font-weight: 500;
    `,
    large: css`
        padding: 12px 28px;
        font-size: 20px;
        font-weight: 500;
    `,
};

const types = {
    primary: css`
        background-color: var(--color-brand-600);
        color: var(--color-brand-50);
        border: none;
        &:hover {
            background-color: var(--color-brand-700);
        }
    `,
    secondary: css`
        background-color: var(--color-grey-0);
        color: var(--color-grey-600);
        border: 1px solid var(--color-grey-200);
        &:hover {
            background-color: var(--color-grey-50);
        }
    `,
    danger: css`
        background-color: var(--color-red-700);
        color: var(--color-red-100);
        &:hover {
            background-color: var(--color-red-800);
        }
    `,
};

const Button = styled.button`
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);
    ${(props) => sizes[props.size]}
    ${(props) => types[props.type == "reset" ? "secondary" : props.type]}
`;

Button.defaultProps = {
    type: "primary",
    size: "medium",
};

export default Button;