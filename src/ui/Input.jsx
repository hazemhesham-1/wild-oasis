import styled from "styled-components";

const Input = styled.input`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  padding: 8px 16px;
  box-shadow: var(--shadow-sm);
  outline: none;
  &:focus {
    border: 2px solid var(--color-brand-700);
  }
`;

export default Input;