import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../styles/breakpoints";

const StyledDataItem = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 8px;
    padding: 10px 0;

    & div {
        display: flex;
        gap: 8px;
        grid-column: span 2;
        font-size: 16px;
    };
    
    @media ${device.lg} {
        grid-template-columns: auto auto 2fr;
        & div {
            grid-column: auto;
        }
    };
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
    };
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