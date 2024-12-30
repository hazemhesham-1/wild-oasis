import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { styled, css } from "styled-components";

const StyledFilter = styled.div`
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-sm);
    padding: 8px;
    display: flex;
    gap: 8px;
    box-shadow: var(--shadow-sm);
`;

const FilterButton = styled.button`
    background-color: var(--color-grey-0);
    ${(props) => props.$active && css`
        background-color: var(--color-brand-600);
        color: var(--color-brand-50);
    `};
    border: none;
    border-radius: var(--border-radius-sm);
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.25s;

    &:hover:not(:disabled) {
        background-color: var(--color-brand-600);
        color: var(--color-brand-50);
    }
`;

const Filter = ({ filterField, options }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterField) || options[0].value;

    function handleClick(value) {
        searchParams.set(filterField, value);
        if(searchParams.get("page")) {
            searchParams.set("page", 1);
        }
        setSearchParams(searchParams);
    }

    return (
        <StyledFilter>
            {options.map((option) =>
                <FilterButton
                    key={option.value}
                    onClick={() => handleClick(option.value)}
                    $active={currentFilter === option.value ? 1 : 0}
                    disabled={currentFilter === option.value}
                >
                    {option.label}
                </FilterButton>
            )}
        </StyledFilter>
    );
}

Filter.propTypes = {
    filterField: PropTypes.string,
    options: PropTypes.array,
};

export default Filter;