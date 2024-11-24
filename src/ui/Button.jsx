import { styled, css } from "styled-components";

const sizes = {
  small: css`
    padding: 6px 12px;
    text-align: center;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
  `,
  medium: css`
    padding: 12px 24px;
    font-size: 20px;
    font-weight: 500;
  `,
  large: css`
    padding: 18px 32px;
    font-size: 22px;
    font-weight: 500;
  `,
}

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
}

const Button = styled.button`
  ${props => sizes[props.size]}
  ${props => types[props.type == "reset" ? "secondary" : props.type]}
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
`;

Button.defaultProps = {
  type: "primary",
  size: "medium"
};

export default Button;