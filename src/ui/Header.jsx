import styled from "styled-components";
import { device } from "../styles/breakpoints";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    border-bottom: 1px solid var(--color-grey-100);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 8px 12px;

    @media ${device.md} {
        justify-content: flex-end;
    };
    @media ${device.xl} {
        padding: 12px 24px;
    };
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