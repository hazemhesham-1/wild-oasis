import PropTypes from "prop-types";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Heading from "./Heading";
import Button from "./Button";

const StyledErrorFallback = styled.main`
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Box = styled.div`
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
    padding: 65px;
    text-align: center;

    & h1 {
        margin-bottom: 20px;
    }
    & p {
        color: var(--color-grey-500);
        font-family: "Sono";
        margin-bottom: 36px;
    }
`;

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <>
            <GlobalStyles/>
            <StyledErrorFallback>
                <Box>
                    <Heading as="h1">Something went wrong 🧐</Heading>
                    <p>{error.message}</p>
                    <Button size="large" onClick={resetErrorBoundary}>
                        Try again
                    </Button>
                </Box>
            </StyledErrorFallback>
        </>
    );
};

ErrorFallback.propTypes = {
    error: PropTypes.object,
    resetErrorBoundary: PropTypes.func,
};

export default ErrorFallback;