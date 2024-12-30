import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDataItem = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 10px 0;
`;
const Label = styled.span`
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 500;
    & svg {
        color: var(--color-brand-600);
        height: 28px;
        width: 28px;
    }
`;

const DataItem = ({ children, icon, label }) => {
    return (
        <StyledDataItem>
            <Label>{icon}<span>{label}</span></Label>
            {children}
        </StyledDataItem>
    );
};

DataItem.propTypes = {
    children: PropTypes.any,
    icon: PropTypes.any,
    label: PropTypes.string,
};

export default DataItem;