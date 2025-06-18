import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

function useCreateCabin() {
    const queryClient = useQueryClient();
    const {isPending: isCreating, mutate: createCabin} = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
            toast.success("New Cabin Created Successfully");
        },
        onError: (err) => toast.error(err.message),
    });

    return { createCabin, isCreating}
}

export { useCreateCabin };