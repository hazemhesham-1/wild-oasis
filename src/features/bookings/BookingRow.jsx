import { useNavigate } from "react-router-dom";
import { format, isToday } from "date-fns";
import PropTypes from "prop-types";
import styled from "styled-components";
import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye, HiTrash } from "react-icons/hi2";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";

const Cabin = styled.div`
    color: var(--color-grey-600);
    font-family: "Sono";
    font-size: 18px;
    font-weight: 600;
`;

const Stacked = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    & span:first-child {
        font-size: 16px;
        font-weight: 500;
        white-space: nowrap;
    };
    & span:last-child {
        color: var(--color-grey-500);
        font-size: 12px;
    };
`;

const Amount = styled.div`
    font-family: "Sono";
    font-weight: 600;
`;

const BookingRow = ({ booking }) => {
    const navigate = useNavigate();
    const { checkout, isCheckingOut } = useCheckout();
    const { deleteBooking, isDeleting } = useDeleteBooking();

    const {
        id: bookingId,
        start_date: startDate,
        end_date: endDate,
        num_nights: numNights,
        status,
        total_price: totalPrice,
        cabins: { name: cabinName },
        guests: { full_name: guestName, email },
    } = booking;

    const statusToTagName = {
        "unconfirmed": "blue",
        "checked-in": "green",
        "checked-out": "silver",
    };

    return (
        <Table.Row>
            <Cabin>{cabinName}</Cabin>
            <Stacked>
                <span>{guestName}</span>
                <span>{email}</span>
            </Stacked>
            <Stacked>
                <span>{isToday(new Date(startDate)) ? "Today" : formatDistanceFromNow(startDate)}{" "}
                    &rarr; {numNights} night stay
                </span>
                <span>{format(new Date(startDate), "MMM dd yyyy")} &mdash; {format(new Date(endDate), "MMM dd yyyy")}</span>
            </Stacked>
            <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
            <Amount>{formatCurrency(totalPrice)}</Amount>
            <Modal>
                <Menus.Menu>
                    <Menus.Toggle id={bookingId}/>
                    <Menus.List id={bookingId}>
                        <Menus.Button
                            icon={<HiEye/>}
                            onClick={() => navigate(`/bookings/${bookingId}`)}
                        >
                            Show Details
                        </Menus.Button>
                        {status === "unconfirmed" && (
                            <Menus.Button
                                icon={<HiArrowDownOnSquare/>}
                                onClick={() => navigate(`/checkin/${bookingId}`)}
                            >
                                Check In
                            </Menus.Button>
                        )}
                        {status === "checked-in" && (
                            <Menus.Button
                                icon={<HiArrowUpOnSquare/>}
                                onClick={() => checkout(bookingId)}
                                disabled={isCheckingOut}
                            >
                                Check out
                            </Menus.Button>
                        )}
                        <Modal.Open opens="delete-form">
                            <Menus.Button icon={<HiTrash/>}>
                                Delete
                            </Menus.Button>
                        </Modal.Open>
                    </Menus.List>
                </Menus.Menu>
                <Modal.Window name="delete-form">
                    <ConfirmDelete
                        resoureName={`Booking #${bookingId}`}
                        onConfirm={() => deleteBooking(bookingId)}
                        disabled={isDeleting}
                    />
                </Modal.Window>
            </Modal>
        </Table.Row>
    );
};

BookingRow.propTypes = {
    booking: PropTypes.any,
};

export default BookingRow;