import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFormRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.2fr 1fr;
    align-items: center;
    &:last-child {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
`;
const Label = styled.label`
    font-weight: 500;
`;
const Error = styled.span`
    color: var(--color-red-700);
    font-size: 16px;
`;

const FormRow = ({ label , children, error }) => {
    return (
        <StyledFormRow>
            <Label htmlFor={children.props?.id}>{label}</Label>
            {children}
            {error && <Error>{error}</Error>}
        </StyledFormRow>
    );
}

FormRow.propTypes = {
    label: PropTypes.string,
    children: PropTypes.any,
    error: PropTypes.string,
}

export default FormRow;