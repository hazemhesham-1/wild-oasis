import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    to {
        transform: rotate(1turn);
    }
`;

const Spinner = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    --circle: radial-gradient(closest-side, var(--color-brand-600) 90%, rgba(0,0,0,0)) 50% 0/20px 15px;
    --spinner: conic-gradient(rgba(0,0,0,0) 30%, var(--color-brand-600));
    background: var(--circle) no-repeat, var(--spinner);
    mask: radial-gradient(rgba(0,0,0,0) 50%, #000 55%);
    margin: 75px auto;
    animation: ${rotate} 1s linear infinite;
`;

export default Spinner;