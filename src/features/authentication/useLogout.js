import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutAPI } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";

function useLogout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutate: logout, isPending: isLoading } = useMutation({
        mutationFn: logoutAPI,
        onSuccess: () => {
            queryClient.removeQueries();
            navigate("/login", { replace: true });
        }
    });

    return { logout, isLoading };
}

export { useLogout };