import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateBooking } from "../../services/apiBookings";

function useCheckin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: checkin, isPending: isCheckingIn } = useMutation({
        mutationFn: ({ bookingId, breakfast }) =>
            updateBooking(bookingId, {
                status: "checked-in",
                is_paid: true,
                ...breakfast,
            }),
        onSuccess: (data) => {
            toast.success(`Booking #${data.id} has checked in successfully`);
            queryClient.invalidateQueries({ active : true });
            navigate("/");
        },
        onError: () => {
            toast.error("There was an error while checking in");
        },
    });
    
    return { checkin, isCheckingIn };
}

export { useCheckin };