import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";

const Table = styled.div`
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-300);
    border-radius: var(--border-radius-md);
    font-size: 16px;
    overflow: hidden;
`;
const TableHeader = styled.header`
    background-color: var(--color-grey-50);
    color: var(--color-grey-600);
    border-bottom: 1px solid var(--color-grey-100);
    display: grid;
    grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
    column-gap: 10px;
    align-items: center;
    padding: 15px 28px;
    font-weight: 600;
    letter-spacing: 0.8px;
    text-transform: uppercase;
`;

const CabinTable = () => {
    const { cabins, isLoading } = useCabins();

    if(isLoading) return <Spinner/>

    return (
        <Table role="table">
            <TableHeader role="row">
                <div></div>
                <div>Cabin</div>
                <div>Capacity</div>
                <div>Price</div>
                <div>Discount</div>
            </TableHeader>
            {cabins.map((cabin) =>
                <CabinRow cabin={cabin} key={cabin.id}/>
            )}
        </Table>
    );
}

export default CabinTable;