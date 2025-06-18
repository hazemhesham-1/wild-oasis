import { styled, css } from "styled-components";
import { device } from "../styles/breakpoints";

const Row = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media ${device.md} {
        ${(props) => props.type == "horizontal" && css`
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        `}
    };
`;

Row.defaultProps = {
    type: "vertical",
};

export default Row;