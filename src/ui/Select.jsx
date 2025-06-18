import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSelect = styled.select`
    background-color: var(--color-grey-0);
    border: 1px solid;
    border-color: ${(props) => (
        props.type === "white" ? "var(--color-grey-100)" : "var(--color-grey-300)"
    )};
    border-radius: var(--border-radius-sm);
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 500;
    box-shadow: var(--shadow-sm);
`;

const Select = ({ options, value, onChange, ...props }) => {
    return (
        <StyledSelect value={value} onChange={onChange} {...props}>
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </StyledSelect>
    );
};

Select.propTypes = {
    options: PropTypes.array,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Select;