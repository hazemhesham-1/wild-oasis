import { useState } from "react";
import { useLogin } from "./useLogin";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";

const LoginForm = () => {
    const [email, setEmail] = useState("test@company.org");
    const [password, setPassword] = useState("12345678");
    const { login, isLoading } = useLogin();

    function handleSubmit(e) {
        e.preventDefault();
        if(!email || !password) return;

        login({email, password}, {
            onSettled: () => {
                setEmail("");
                setPassword("");
            }
        });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormRowVertical label="Email address">
                <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="username"
                    disabled={isLoading}
                />
            </FormRowVertical>
            <FormRowVertical label="Password">
                <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="password"
                    disabled={isLoading}
                />
            </FormRowVertical>
            <FormRowVertical>
                <Button size="large" disabled={isLoading}>
                    {!isLoading ? "Login" : <SpinnerMini/>}
                </Button>
            </FormRowVertical>
        </Form>
    );
};

export default LoginForm;