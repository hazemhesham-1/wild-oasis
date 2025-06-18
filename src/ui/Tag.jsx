import styled from "styled-components";

const Tag = styled.span`
    background-color: var(--color-${(props) => props.type}-100);
    color: var(--color-${(props) => props.type}-700);
    border-radius: 100px;
    padding: 8px 14px;
    width: 100%;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
`;

export default Tag;