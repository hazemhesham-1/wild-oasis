import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFormRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0;

    label {
        font-weight: 500;
    }
`;

const Error = styled.span`
    color: var(--color-red-700);
    font-size: 18px;
`;

const FormRowVertical = ({ children, label, error }) => {
    return (
        <StyledFormRow>
            {label && <label htmlFor={children.props.id}>{label}</label>}
            {children}
            {error && <Error>{error}</Error>}
        </StyledFormRow>
    );
};

FormRowVertical.propTypes = {
    children: PropTypes.any,
    label: PropTypes.string,
    error: PropTypes.string,
};

export default FormRowVertical;