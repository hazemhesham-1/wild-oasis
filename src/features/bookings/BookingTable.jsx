import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import BookingRow from "./BookingRow";
import { useBookings } from "./useBookings";

const BookingTable = () => {
    const { bookings, isLoading, count } = useBookings();

    if(isLoading) return <Spinner/>;
    if(!bookings.length) return <Empty resourceName="bookings"/>;
    
    return (
        <Menus>
            <Table columns="0.6fr 2fr 2.5fr 1.5fr 1fr 32px">
                <Table.Header>
                    <div>Cabin</div>
                    <div>Guest</div>
                    <div>Dates</div>
                    <div>Status</div>
                    <div>Amount</div>
                    <div></div>
                </Table.Header>
                <Table.Body
                    data={bookings}
                    render={(booking) => <BookingRow booking={booking} key={booking.id}/>}
                />
                <Table.Footer><Pagination count={count}/></Table.Footer>
            </Table>
        </Menus>
    );
}

export default BookingTable;