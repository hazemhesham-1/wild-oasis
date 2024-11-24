import styled from "styled-components";

const StyledLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    width: 110px;
`;

const Paragraph = styled.p`
    font-family: "Sono", sans-serif;
    font-size: 20px;
    text-transform: uppercase;
`;

const Logo = () => {
    return (
        <StyledLogo>
            <Image src="../public/logo-light.jpg" alt="logo"/>
            <Paragraph>The Wild Oasis</Paragraph>
        </StyledLogo>
    );
};

export default Logo;