import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotateAnimation = keyframes`
    100% { transform: rotate(360deg); }
`;

const SpinnerMini = styled(BiLoaderAlt)`
    height: 32px;
    width: 32px;
    animation: ${rotateAnimation} 1s linear infinite;
`;

export default SpinnerMini;