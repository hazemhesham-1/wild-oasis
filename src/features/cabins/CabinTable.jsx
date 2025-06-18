import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Empty from "../../ui/Empty";

const CabinTable = () => {
    const { cabins, isLoading } = useCabins();
    const [searchParams] = useSearchParams();
    const filterValue = searchParams.get("discount") || "all";
    const sortValue = searchParams.get("sortBy") || "name-asc";

    if(isLoading) return <Spinner/>;
    if(!cabins.length) return <Empty resourceName="cabins"/>;

    let filteredCabins = cabins;
    if(filterValue == "no-discount") {
        filteredCabins = cabins.filter(cabin => cabin.discount === 0);
    }
    else if(filterValue == "with-discount") {
        filteredCabins = cabins.filter(cabin => cabin.discount > 0);
    }

    const [field, direction] = sortValue.split("-");
    const sortedCabins = filteredCabins.sort((a, b) =>
        direction === "asc" ? a[field] - b[field] : b[field] - a[field]
    );

    return (
        <Menus>
            <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
                <Table.Header>
                    <div></div>
                    <div>Cabin</div>
                    <div>Capacity</div>
                    <div>Price</div>
                    <div>Discount</div>
                </Table.Header>
                <Table.Body
                    data={sortedCabins}
                    render={(cabin) => <CabinRow cabin={cabin} key={cabin.id}/>}
                />
            </Table>
        </Menus>
    );
}

export default CabinTable;