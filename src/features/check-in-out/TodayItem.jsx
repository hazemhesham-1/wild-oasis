import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import Button from "../../ui/Button";
import { Flag } from "../../ui/Flag";
import Tag from "../../ui/Tag";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
    border-bottom: 1px solid var(--color-grey-100);
    display: grid;
    grid-template-columns: 0.5fr 25px 1fr 1fr;
    align-items: center;
    gap: 20px;
    padding: 10px 0;
    font-size: 16px;

    &:first-child {
        border-top: 1px solid var(--color-grey-100);
    };

    & a:last-child, & button:last-child {
        grid-column: 1 / -1;
    };

    @media ${device.md} {
        grid-template-columns: 0.5fr 25px 1fr 1fr 1fr;
        & a:last-child, & button:last-child {
            grid-column: auto;
        };
    };

    @media ${device.lg} {
        grid-template-columns: 0.5fr 25px 1fr 1fr;
        & a:last-child, & button:last-child {
            grid-column: 1 / -1;
        };
    };
`;

const Guest = styled.div`
    font-weight: 500;
`;

const TodayItem = ({ activity }) => {
    const {
        id,
        status,
        num_nights: numNights,
        guests: {
            full_name: fullName,
            country_code: countryCode,
        }
    } = activity;

    return (
        <StyledTodayItem>
            {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
            {status === "checked-in" && <Tag type="blue">Leaving</Tag>}
            <Flag
                src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
                alt={`${countryCode} flag`}
            />
            <Guest>{fullName}</Guest>
            <div>{numNights} nights</div>
            {status === "unconfirmed" && (
                <Button size="small" as={Link} to={`/checkin/${id}`}>
                    Check in
                </Button>
            )}
            {status === "checked-in" && <CheckoutButton bookingId={id}/>}
        </StyledTodayItem>
    );
};

TodayItem.propTypes = {
    activity: PropTypes.object,
};

export default TodayItem;