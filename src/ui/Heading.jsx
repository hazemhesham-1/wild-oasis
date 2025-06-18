import { styled, css } from "styled-components";
import { device } from "../styles/breakpoints";

const Heading = styled.h1`
    ${props => props.as == "h1" && css`
        font-size: 27px;
        font-weight: 600;

        @media ${device.lg} {
            font-size: 36px;
        };
    `}
    ${props => props.as == "h2" && css`
        font-size: 18px;
        font-weight: 600;

        @media ${device.lg} {
            font-size: 24px;
        };
    `}
    ${props => props.as == "h3" && css`
        font-size: 18px;
        font-weight: 500;

        @media ${device.lg} {
            font-size: 24px;
        };
    `}
    ${props => props.as == "h4" && css`
        font-size: 16px;
        font-weight: 600;
        text-align: center;

        @media ${device.lg} {
            font-size: 21px;
        };
    `}
`;

export default Heading;