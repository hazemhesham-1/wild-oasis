import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login as loginAPI } from "../../services/apiAuthentication";

function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    
    const { mutate: login, isPending: isLoading } = useMutation({
        mutationFn: ({email, password}) => loginAPI({email, password}),
        onSuccess: (user) => {
            queryClient.setQueryData(["user"], user.user);
            navigate("/dashboard", { replace: true });
        },
        onError: () => {
            toast.error("Incorrect Email address or password");
        }
    });

    return { login, isLoading };
}

export { useLogin };