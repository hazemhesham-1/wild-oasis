import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { device } from "../styles/breakpoints";
import Header from "./Header";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;

    @media ${device.xl} {
        height: 100vh;
        grid-template-columns: 280px 1fr;
    };
`;

const Main = styled.main`
    background-color: var(--color-grey-50);
    padding: 32px 16px;

    @media ${device.lg} {
        padding: 32px 20px;
    };
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 992px;
    margin: 0 auto;
`;

const AppLayout = () => {
    return (
        <StyledAppLayout>
            <Sidebar/>
            <Header/>
            <Main>
                <Container>
                    <Outlet/>
                </Container>
            </Main>
            
        </StyledAppLayout>
    );
};

export default AppLayout;