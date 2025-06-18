import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../styles/breakpoints";

const StyledFormRow = styled.div`
    display: grid;
    align-items: center;
    gap: 15px;
    padding: 10px 0;
    &:first-child {
        padding-top: 0;
    }
    &:last-child {
        padding-bottom: 0;
    }
    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
    &:last-child:has(button) {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }

    @media ${device.lg} {
        grid-template-columns: 320px 1.3fr 1fr;
        gap: 25px;
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
            {label && <Label htmlFor={children.props?.id}>{label}</Label>}
            {children}
            {error && <Error>{error}</Error>}
        </StyledFormRow>
    );
};

FormRow.propTypes = {
    label: PropTypes.string,
    children: PropTypes.any,
    error: PropTypes.string,
};

export default FormRow;