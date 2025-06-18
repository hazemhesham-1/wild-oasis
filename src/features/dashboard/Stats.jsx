import PropTypes from "prop-types";
import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

const Stats = ({ bookings, confirmedStays, numDays, cabinsCount }) => {
    const numBookings = bookings.length;
    const sales = bookings.reduce((acc, curr) => acc + curr.total_price, 0);
    const checkins = confirmedStays.length;

    const occupation = confirmedStays.reduce((acc, curr) => acc + curr.num_nights, 0);
    const occupationRate = Math.round(occupation / (numDays * cabinsCount) * 100);
    
    return (
        <>
            <Stat
                title="Bookings"
                color="blue"
                value={numBookings}
                icon={<HiOutlineBriefcase/>}
            />
            <Stat
                title="Sales"
                color="green"
                value={formatCurrency(sales)}
                icon={<HiOutlineBanknotes/>}
            />
            <Stat
                title="Check ins"
                color="indigo"
                value={checkins}
                icon={<HiOutlineCalendarDays/>}
            />
            <Stat
                title="Occupancy rate"
                color="yellow"
                value={`${occupationRate}%`}
                icon={<HiOutlineChartBar/>}
            />
        </>
    );
};

Stats.propTypes = {
    bookings: PropTypes.array,
    confirmedStays: PropTypes.array,
    numDays: PropTypes.number,
    cabinsCount: PropTypes.number,
};

export default Stats;