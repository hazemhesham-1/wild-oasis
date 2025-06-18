import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuthentication";

function useUpdateUser() {
    const queryClient = useQueryClient();
    const {mutate: updateUser, isPending: isUpdating} = useMutation({
        mutationFn: updateCurrentUser,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["user"],
            });
            toast.success("User account updated successfully");
        },
        onError: (err) => toast.error(err.message),
    });

    return { updateUser, isUpdating };
}

export { useUpdateUser };