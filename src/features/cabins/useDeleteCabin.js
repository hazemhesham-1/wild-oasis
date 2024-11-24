import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinAPI } from "../../services/apiCabins";

function useDeleteCabin() {
    const queryClient = useQueryClient();
    const {isPending: isDeleting, mutate: deleteCabin} = useMutation({
        mutationFn: deleteCabinAPI,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
            toast.success("Cabin Deleted Successfully");
        },
        onError: (err) => toast.error(err.message),
    });

    return { deleteCabin, isDeleting };
}

export { useDeleteCabin };