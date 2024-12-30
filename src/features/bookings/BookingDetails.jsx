import PropTypes from "prop-types";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useBooking } from "./useBooking";
import { useDeleteBooking } from "./useDeleteBooking";
import { useCheckout } from "../check-in-out/useCheckout";
import { useMoveBack } from "../../hooks/useMoveBack";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Tag from "../../ui/Tag";
import BookingDataBox from "./BookingDataBox";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
`;

const BookingDetails = () => {
    const { booking, isLoading } = useBooking();
    const { checkout, isCheckingOut } = useCheckout();
    const { deleteBooking, isDeleting } = useDeleteBooking();
    const navigate = useNavigate();
    const moveBack = useMoveBack();

    if(isLoading) return <Spinner/>;
    if(!booking) return <Empty resourceName="booking"/>;

    const {
        id: bookingId,
        status,
    } = booking;

    const statusToTagName = {
        unconfirmed: "blue",
        "checked-in": "green",
        "checked-out": "silver",
    };

    return (
        <>
            <Row type="horizontal">
                <HeadingGroup>
                    <Heading as="h1">Booking #{bookingId}</Heading>
                    <Tag type={statusToTagName[status]}>{status?.replace("-", " ")}</Tag>
                </HeadingGroup>
                <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
            </Row>
            <BookingDataBox booking={booking}/>
            <ButtonGroup>
                {status === "unconfirmed" &&
                    <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
                        Check In
                    </Button>
                }
                {status === "checked-in" &&
                    <Button onClick={() => checkout(bookingId)} disabled={isCheckingOut}>
                        Check out
                    </Button>
                }
                <Modal>
                    <Modal.Open opens="delete-form">
                        <Button type="danger">
                            Delete
                        </Button>
                    </Modal.Open>
                    <Modal.Window name="delete-form">
                        <ConfirmDelete
                            resoureName={`Booking #${bookingId}`}
                            onConfirm={() => deleteBooking(bookingId, { onSettled: moveBack })}
                            disabled={isDeleting}
                        />
                    </Modal.Window>
                </Modal>
                <Button type="secondary" onClick={moveBack}>Back</Button>
            </ButtonGroup>
        </>
    );
};

BookingDetails.propTypes = {
    id: PropTypes.number,
};

export default BookingDetails;