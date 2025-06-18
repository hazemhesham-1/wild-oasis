import { format, isToday } from "date-fns";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { HiOutlineChatBubbleBottomCenterText, HiOutlineCheckCircle, HiOutlineCurrencyDollar, HiOutlineHomeModern } from "react-icons/hi2";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";

const StyledBookingDataBox = styled.section`
    border-radius: var(--border-radius-sm);
    font-size: 18px;
    overflow: hidden;
`;

const Header = styled.div`
    background-color: var(--color-brand-500);
    color: var(--color-brand-100);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 22px 32px;
    font-size: 20px;
    font-weight: 500;

    svg {
        height: 38px;
        width: 38px;
    }
    & div:first-child {
        display: flex;
        align-items: center;
        gap: 20px;
        font-weight: 600;
    }
    & span {
        font-family: "Sono";
        font-size: 24px;
        margin-left: 4px;
    }

    @media ${device.lg} {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    };
`;

const Section = styled.section`
    padding: 28px 10px 18px;

    @media ${device.lg} {
        padding: 42px 48px 18px;
    };
`;

const Guest = styled.div`
    color: var(--color-grey-500);
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;

    & p:first-of-type {
        color: var(--color-grey-700);
        font-weight: 500;
    }
    & span {
        display: none;
    }

    @media ${device.lg} {
        flex-direction: row;
        align-items: center;
        & span {
            display: inline;
        };
    };
`;

const Price = styled.div`
    background-color: ${(props) => props.$isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
    color: ${(props) => props.$isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};
    border-radius: var(--border-radius-sm);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    margin-top: 28px;

    & p:last-child {
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
    };

    svg {
        color: currentColor !important;
        height: 32px;
        width: 32px;
    };

    @media ${device.md} {
        flex-direction: row;
        padding: 16px 32px;
    };
`;

const Footer = styled.footer`
    color: var(--color-grey-500);
    padding: 18px 58px;
    font-size: 16px;
    text-align: right;
`;

const BookingDataBox = ({ booking }) => {
    const {
        created_at: crearedAt,
        start_date: startDate,
        end_date: endDate,
        num_nights: numNights,
        num_guests: numGuests,
        cabin_price: cabinPrice,
        extra_price: extraPrice,
        total_price: totalPrice,
        is_paid: isPaid,
        has_breakfast: hasBreakfast,
        observations,
        guests: {
            full_name: guestName,
            email,
            national_id: nationalID,
            country_code: countryCode,
        },
        cabins: { name: cabinName },
    } = booking;

    return (
        <StyledBookingDataBox>
            <Header>
                <div>
                    <HiOutlineHomeModern/>
                    <p>{numNights} nights in Cabin <span>{cabinName}</span></p>
                </div>
                <p>
                    {format(new Date(startDate), "EEE, MMM dd yyyy")}
                    {isToday(new Date(startDate)) ? " Today " : ` (${formatDistanceFromNow(startDate)}) `}
                    &mdash;{" "}
                    {format(new Date(endDate), "EEE, MMM dd yyyy")}
                </p>
            </Header>
            <Section>
                <Guest>
                    {countryCode && (
                        <Flag
                            src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
                            alt={`${countryCode} flag`}
                        />
                    )}
                    <p>{guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}</p>
                    <span>&bull;</span>
                    <p>{email}</p>
                    <span>&bull;</span>
                    <p>National ID {nationalID}</p>
                </Guest>
                {observations &&
                    <DataItem icon={<HiOutlineChatBubbleBottomCenterText/>} label="Observations">
                        {observations}
                    </DataItem>
                }
                <DataItem icon={<HiOutlineCheckCircle/>} label="Breakfast Included : ">
                    {hasBreakfast ? "Yes" : "No"}
                </DataItem>
                <Price $isPaid={isPaid}>
                    <DataItem icon={<HiOutlineCurrencyDollar/>} label="Total Price : ">
                        {formatCurrency(totalPrice)}
                        {hasBreakfast && (
                            <div>
                                <span>{`(${formatCurrency(cabinPrice)} cabin`}</span>
                                {"+"}
                                <span>{`${formatCurrency(extraPrice)} breakfast)`}</span>
                            </div>
                        )}
                    </DataItem>
                    <p>{isPaid ? "Paid" : "Will pay later"}</p>
                </Price>
            </Section>
            <Footer>
                <p>Booked {format(new Date(crearedAt), "EEE, MMM dd yyyy, p")}</p>
            </Footer>
        </StyledBookingDataBox>
    );
};

BookingDataBox.propTypes = {
    booking: PropTypes.object,
};

export default BookingDataBox;