import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupAPI } from "../../services/apiAuthentication";

function useSignup() {
    const { mutate: signup, isPending: isLoading } = useMutation({
        mutationFn: ({ fullName, email, password }) => signupAPI({ fullName, email, password }),
        onSuccess: () => {
            toast.success("Account created successfully");
            toast.success("Confirmation email sent, please verify your email address");
        },
    });

    return { signup, isLoading };
}

export { useSignup };