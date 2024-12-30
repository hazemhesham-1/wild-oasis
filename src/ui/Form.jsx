import styled, { css } from "styled-components";

const Form = styled.form`
    ${(props) =>
        props.type === "regular" &&
        css`
            background-color: var(--color-grey-0);
            border: 1px solid var(--color-grey-100);
            border-radius: var(--border-radius-md);
            padding: 22px 48px;
        `}
    ${(props) => props.type === "modal" && css`width: 768px;`}
    font-size: 18px;
`;

Form.defaultProps = {
    type: "regular",
};

export default Form;