import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTable = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

const TableOperations = ({ children }) => {
    return (
        <StyledTable>
            {children}
        </StyledTable>
    );
};

TableOperations.propTypes = {
    children: PropTypes.any,
};

export default TableOperations;