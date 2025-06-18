import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 110px;
`;

const Paragraph = styled.p`
    font-family: "Pacifico", sans-serif;
    font-size: 18px;
    text-transform: uppercase;
`;

const Logo = () => {
    const navigate = useNavigate();
    
    return (
        <StyledLogo onClick={() => navigate("/")}>
            <Image src="/assets/logo.png" alt="Wild Oasis logo"/>
            <Paragraph>Wild Oasis</Paragraph>
        </StyledLogo>
    );
};

export default Logo;