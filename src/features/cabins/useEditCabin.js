import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

function useEditCabin() {
    const queryClient = useQueryClient();
    const {isPending: isEditing, mutate: editCabin} = useMutation({
        mutationFn: ({newCabinData, id}) => createEditCabin(newCabinData, id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
            toast.success("Cabin Edited Successfully");
        },
        onError: (err) => toast.error(err.message),
    });

    return { editCabin, isEditing };
}

export { useEditCabin };