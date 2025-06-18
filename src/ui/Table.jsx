import PropTypes from "prop-types";
import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-300);
    border-radius: var(--border-radius-md);
    width: 100%;
    max-width: calc(100vw - 32px);
    font-size: 16px;
    overflow-x: auto;
`;

const CommonRow = styled.div`
    display: grid;
    grid-template-columns: ${(props) => props.$columns};
    align-items: center;
    column-gap: 38px;
    min-width: 980px;
`;

const StyledHeader = styled(CommonRow)`
    background-color: var(--color-grey-50);
    color: var(--color-grey-600);
    border-bottom: 1px solid var(--color-grey-100);
    padding: 15px 32px;
    font-weight: 600;
    letter-spacing: 0.8px;
    text-transform: uppercase;
`;

const StyledRow = styled(CommonRow)`
    padding: 12px 32px;
    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
`;

const StyledBody = styled.section`
    margin: 8px 0;
`;

const Footer = styled.footer`
    background-color: var(--color-grey-50);
    display: flex;
    justify-content: center;
    width: 100%;
    min-width: 980px;
    padding: 12px;
    
    &:not(:has(*)) {
        display: none;
    }
`;

const Empty = styled.p`
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    margin: 32px;
`;

const TableContext = createContext();

const Table = ({ children, columns }) => {
    return (
        <TableContext.Provider value={{columns}}>
            <StyledTable role="table">{children}</StyledTable>
        </TableContext.Provider>
    );
};

function Header({ children }) {
    const { columns } = useContext(TableContext);
    return (
        <StyledHeader role="row" $columns={columns}>
            {children}
        </StyledHeader>
    );
};
function Body({ data, render }) {
    if(!data.length) return <Empty>No data to show at this moment</Empty>;
    
    return <StyledBody>{data.map(render)}</StyledBody>;
};
function Row({ children }) {
    const { columns } = useContext(TableContext);
    return (
        <StyledRow role="row" $columns={columns}>
            {children}
        </StyledRow>
    );
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

Table.propTypes = {
    children: PropTypes.any,
    columns: PropTypes.string,
};
Header.propTypes = {
    children: PropTypes.any,
};
Body.propTypes = {
    data: PropTypes.array,
    render: PropTypes.func,
};
Row.propTypes = {
    children: PropTypes.any,
};

export default Table;