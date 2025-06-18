import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";
import TableOperations from "../../ui/TableOperations";

const CabinTableOperations = () => {
    const filterOptions = [
        { label: "All", value: "all" },
        { label: "No discount", value: "no-discount" },
        { label: "With discount", value: "with-discount" },
    ];
    const sortOptions = [
        { label: "Sort by name (A-Z)", value: "name-asc" },
        { label: "Sort by name (Z-A)", value: "name-dsc" },
        { label: "Sort by price (Low to High)", value: "regular_price-asc" },
        { label: "Sort by price (High to Low)", value: "regular_price-dsc" },
        { label: "Sort by capacity (Low to High)", value: "max_capacity-asc" },
        { label: "Sort by capacity (High to Low)", value: "max_capacity-dsc" },
    ];
    return (
        <TableOperations>
            <Filter filterField="discount" options={filterOptions}/>
            <Sort options={sortOptions}/>
        </TableOperations>
    );
}

export default CabinTableOperations;