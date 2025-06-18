import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
    background-color: var(--color-grey-0);
    padding: 18px 12px;
    border-right: 1px solid var(--color-grey-100);
    grid-row: span 2;
    display: flex;
    flex-direction: column;
    gap: 42px;
`;

const Sidebar = () => {
    return (
        <StyledSidebar>
            <Logo/>
            <MainNav/>
            <Uploader/>
        </StyledSidebar>
    );
};

export default Sidebar;