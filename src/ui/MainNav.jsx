import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern, HiOutlineUsers } from "react-icons/hi2";

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 6px;

    @media ${device.md} {
        flex-direction: row;
        justify-content: space-between;
    };
    @media ${device.xl} {
        flex-direction: column;
    };
`;

const StyledNavLink = styled(NavLink)`
    &:link, &:visited {
        color: var(--color-grey-600);
        display: flex;
        align-items: center;
        gap: 18px;
        padding: 12px 24px;
        font-size: 16px;
        font-weight: 500;
        transition: all 0.25s;

        @media ${device.md} {
            flex-direction: column;
        };
        @media ${device.lg} {
            flex-direction: row;
        };
    };

    &:active, &:hover, &.active:link, &.active:visited {
        background-color: var(--color-grey-50);
        color: var(--color-grey-800);
        border-radius: var(--border-radius-sm);
    };
    &:active, &.active:link {
        font-weight: 600;
    };

    & svg {
        height: 28px;
        width: 28px;
        color: var(--color-grey-400);
        transition: all 0.25s;
    };
    &:active svg, &:hover svg, &.active:link svg, &.active:visited svg {
        color: var(--color-brand-600);
    };
`;

const MainNav = () => {
    return (
        <nav>
            <NavList>
                <li>
                    <StyledNavLink to="/dashboard">
                        <HiOutlineHome/>
                        <span>Home</span>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/bookings">
                        <HiOutlineCalendarDays/>
                        <span>Bookings</span>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/cabins">
                        <HiOutlineHomeModern/>
                        <span>Cabins</span>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/users">
                        <HiOutlineUsers/>
                        <span>Users</span>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/settings">
                        <HiOutlineCog6Tooth/>
                        <span>Settings</span>
                    </StyledNavLink>
                </li>
            </NavList>
        </nav>
    );
};

export default MainNav;