import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";
import TableOperations from "../../ui/TableOperations";

const BookingTableOperations = () => {
    const filterOptions = [
        { label: "All", value: "all" },
        { label: "Checked out", value: "checked-out" },
        { label: "Checked in", value: "checked-in" },
        { label: "Unconfirmed", value: "unconfirmed" },
    ];
    const sortOptions = [
        { label: "Sort by date (recent to earlier)", value: "start_date-dsc" },
        { label: "Sort by date (earlier to recent)", value: "start_date-asc" },
        { label: "Sort by amount (Low to High)", value: "total_price-asc" },
        { label: "Sort by amount (High to Low)", value: "total_price-dsc" },
    ];
    return (
        <TableOperations>
            <Filter filterField="status" options={filterOptions}/>
            <Sort options={sortOptions}/>
        </TableOperations>
    );
}

export default BookingTableOperations;