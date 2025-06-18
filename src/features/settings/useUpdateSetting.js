import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSettings as updateSettingsAPI } from "../../services/apiSettings";

function useUpdateSetting() {
    const queryClient = useQueryClient();
    const {isPending: isUpdating, mutate: updateSetting} = useMutation({
        mutationFn: updateSettingsAPI,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["settings"],
            });
            toast.success("Settings Updated Successfully");
        },
        onError: (err) => toast.error(err.message),
    });

    return { updateSetting, isUpdating };
}

export { useUpdateSetting };