import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const DashboardBox = styled.div`
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 24px 20px;

    @media ${device.lg} {
        padding: 32px;
    };
`;

export default DashboardBox;