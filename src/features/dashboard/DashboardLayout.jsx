import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { useCabins } from "../cabins/useCabins";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
    display: grid;
    gap: 20px;

    @media ${device.md} {
        grid-template-columns: 1fr 1fr;
    };
    @media ${device.lg} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto 375px auto;
    };
`;

const DashboardLayout = () => {
    const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
    const { confirmedStays, isLoading: isLoadingStays, numDays } = useRecentStays();
    const { cabins, isLoading: isLoadingCabins } = useCabins();

    if(isLoadingBookings || isLoadingStays || isLoadingCabins) return <Spinner/>;
    
    return (
        <StyledDashboardLayout>
            <Stats
                bookings={bookings}
                confirmedStays={confirmedStays}
                numDays={numDays}
                cabinsCount={cabins.length}
            />
            <TodayActivity/>
            <DurationChart confirmedStays={confirmedStays}/>
            <SalesChart bookings={bookings} numDays={numDays}/>
        </StyledDashboardLayout>
    );
};

export default DashboardLayout;