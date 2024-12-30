import PropTypes from "prop-types";
import styled from "styled-components";
import { useBooking } from "../bookings/useBooking";
import { useMoveBack } from "../../hooks/useMoveBack";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import BookingDataBox from "../bookings/BookingDataBox";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";

const Box = styled.div`
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
    padding: 26px 38px;
    font-size: 18px;
`;

const CheckinBooking = () => {
    const [confirmPaid, setConfirmPaid] = useState(false);
    const [addBreakfast, setAddBreakfast] = useState(false);
    const { booking, isLoading } = useBooking();
    const { checkin, isCheckingIn } = useCheckin();
    const { settings, isLoading: isLoadingSettings } = useSettings();
    const moveBack = useMoveBack();

    useEffect(() => setConfirmPaid(booking?.is_paid), [booking]);

    if(isLoading || isLoadingSettings) return <Spinner/>;

    const {
        id: bookingId,
        total_price: totalPrice,
        num_guests: numGuests,
        num_nights: numNights,
        has_breakfast: hasBreakfast,
        guests: { full_name: guestName },
    } = booking;

    const {
        breakfast_price: breakfastPrice,
    } = settings;

    const extraPrice = breakfastPrice * numNights * numGuests;

    function handleCheckin() {
        if(!confirmPaid) return;
        if(addBreakfast) {
            checkin({bookingId,
                breakfast: {
                    has_breakfast: true,
                    extra_price: extraPrice,
                    total_price: totalPrice + extraPrice,
                }
            });
        }
        else {
            checkin({bookingId, breakfast: {}});
        }
    }

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Check in booking #{bookingId}</Heading>
                <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
            </Row>
            <BookingDataBox booking={booking}/>
            {!hasBreakfast &&
                <Box>
                    <Checkbox
                        id="breakfast"
                        checked={addBreakfast}
                        onChange={() => {
                            setAddBreakfast(add => !add);
                            setConfirmPaid(false);
                        }}
                    >
                        Do you want to add breakfast for {formatCurrency(extraPrice)} ?
                    </Checkbox>
                </Box>
            }
            <Box>
                <Checkbox
                    id="confirm"
                    checked={confirmPaid}
                    disabled={confirmPaid}
                    onChange={() => setConfirmPaid(confirm => !confirm)}
                >
                    I confirm that {guestName} has paid the total amount
                    of {" "}
                    {addBreakfast ?
                    `${formatCurrency(totalPrice + extraPrice)} (${formatCurrency(totalPrice)} + ${formatCurrency(extraPrice)})`
                    : formatCurrency(totalPrice)}
                </Checkbox>
            </Box>
            <ButtonGroup>
                <Button
                    onClick={handleCheckin}
                    disabled={!confirmPaid || isCheckingIn}
                >
                    {!isCheckingIn ? `Check in booking #${bookingId}` : "Checking in..."}
                </Button>
                <Button type="secondary" onClick={moveBack}>Back</Button>
            </ButtonGroup>
        </>
    );
};

CheckinBooking.propTypes = {
    id: PropTypes.number,
};

export default CheckinBooking;