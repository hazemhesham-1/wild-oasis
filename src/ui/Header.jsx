import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    border-bottom: 1px solid var(--color-grey-100);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    padding: 18px 60px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <UserAvatar/>
            <HeaderMenu/>
        </StyledHeader>
    );
};

export default Header;