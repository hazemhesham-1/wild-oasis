import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCheckbox = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    & input[type="checkbox"] {
        accent-color: var(--color-brand-600);
        height: 24px;
        width: 24px;
        outline-offset: 2px;
    };
    & input[type="checkbox"]:disabled {
        accent-color: var(--color-brand-600);
    };
    & label {
        display: flex;
        align-items: center;
        gap: 10px;
    };
`;

const Checkbox = ({ children, checked, onChange, id, disabled = false }) => {
    return (
        <StyledCheckbox>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <label htmlFor={id}>{children}</label>
        </StyledCheckbox>
    );
};

Checkbox.propTypes = {
    children: PropTypes.any,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    id: PropTypes.any,
    disabled: PropTypes.bool,
};

export default Checkbox;