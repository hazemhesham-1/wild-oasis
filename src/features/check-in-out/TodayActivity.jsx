import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { useTodayActivity } from "./useTodayActivity";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

const StyledToday = styled.div`
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 24px 12px;

    @media ${device.md} {
        grid-column: 1 / span 2;
    };
    @media ${device.lg} {
        padding: 24px 18px;
    };
`;

const TodayList = styled.ul`
    overflow: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        display: none;
    };
    scrollbar-width: none;
    -ms-overflow-style: none;
`;

const NoActivity = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-top: 10px;
    text-align: center;

    @media ${device.lg} {
        font-size: 24px;
    };
`;

const TodayActivity = () => {
    const { activities, isLoading } = useTodayActivity();
    
    return (
        <StyledToday>
            <Row type="horizontal">
                <Heading as="h2">Today</Heading>
            </Row>
            {!isLoading ? ((activities?.length > 0) ? (
                <TodayList>
                    {activities.map((activity) => (
                        <TodayItem
                            key={activity.id}
                            activity={activity}
                        />
                    ))}
                </TodayList>
            ) : (
                <NoActivity>
                    No activities today...
                </NoActivity>
            )) : (
                <Spinner/>
            )}
        </StyledToday>
    );
};

export default TodayActivity;