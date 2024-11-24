import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: aliceblue;
`;

const Header = ({ children }) => {
    return (
        <StyledHeader>{children}</StyledHeader>
    );
}

Header.propTypes = {
    children: PropTypes.any,
};

export default Header;