import PropTypes from "prop-types";
import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
    border-bottom: 1px solid var(--color-grey-100);
    display: grid;
    grid-template-columns: 110px 25px 1fr 75px 110px;
    align-items: center;
    gap: 20px;
    padding: 10px 0;
    font-size: 18px;

    &:first-child {
        border-top: 1px solid var(--color-grey-100);
    }
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
            country_flag: countryFlag,
            nationality,
        }
    } = activity;

    return (
        <StyledTodayItem>
            {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
            {status === "checked-in" && <Tag type="blue">Leaving</Tag>}
            <Flag src={countryFlag} alt={`${nationality} Flag`}/>
            <Guest>{fullName}</Guest>
            <div>{numNights} nights</div>
            {status === "unconfirmed" &&
                <Button size="small" as={Link} to={`/checkin/${id}`}>
                    Check in
                </Button>
            }
            {status === "checked-in" && <CheckoutButton bookingId={id}/>}
        </StyledTodayItem>
    );
};

TodayItem.propTypes = {
    activity: PropTypes.object,
};

export default TodayItem;