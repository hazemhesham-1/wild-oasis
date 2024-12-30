import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
    background-color: var(--color-grey-50);
    min-height: 100vh;
    padding: 40px 0;
    display: grid;
    grid-template-columns: 480px;
    align-content: start;
    justify-content: center;
    gap: 30px;
`;

const Login = () => {
    return (
        <LoginLayout>
            <Logo/>
            <Heading as="h4">Log in to your account</Heading>
            <LoginForm/>
        </LoginLayout>
    )
};

export default Login;