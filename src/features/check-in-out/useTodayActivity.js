import { useQuery } from "@tanstack/react-query";
import { getStaysToday } from "../../services/apiBookings";

function useTodayActivity() {
    const { data: activities, isLoading } = useQuery({
        queryFn: getStaysToday,
        queryKey: ["today-activity"],
    });

    return { activities, isLoading };
}

export { useTodayActivity };