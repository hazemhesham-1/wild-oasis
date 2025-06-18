import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";

function useBooking() {
    const { id: bookingId } = useParams();
    const { data: booking, isLoading, error } = useQuery({
        queryKey: ["booking", bookingId],
        queryFn: () => getBooking(bookingId),
        retry: false,
    });

    return { booking, isLoading, error };
}

export { useBooking };