import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`;

const Main = styled.main`
    background-color: var(--color-grey-50);
    padding: 32px 48px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 1200px;
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
}

export default AppLayout;