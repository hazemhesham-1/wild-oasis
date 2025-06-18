import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingAPI } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useDeleteBooking() {
    const queryClient = useQueryClient();
    const { mutate: deleteBooking, isPending: isDeleting } = useMutation({
        mutationFn: deleteBookingAPI,
        onSuccess: () => {
            toast.success(`Booking was deleted successfully`);
            queryClient.invalidateQueries({ queryKey: ["bookings"] });
        },
        onError: (err) => {
            toast.error(err.message);
        }
    });
    return { deleteBooking, isDeleting };
}

export { useDeleteBooking };