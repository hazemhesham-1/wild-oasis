import { styled, css } from "styled-components";

const Heading = styled.h1`
    ${props => props.as == "h1" && css`
        font-size: 48px;
        font-weight: 600;
    `}
    ${props => props.as == "h2" && css`
        font-size: 32px;
        font-weight: 600;
    `}
    ${props => props.as == "h3" && css`
        font-size: 32px;
        font-weight: 500;
    `}
    ${props => props.as == "h4" && css`
        font-size: 28px;
        font-weight: 600;
        text-align: center;
    `}
`;

export default Heading;