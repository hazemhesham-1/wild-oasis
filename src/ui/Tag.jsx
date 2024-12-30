import styled from "styled-components";

const Tag = styled.span`
    background-color: var(--color-${(props) => props.type}-100);
    color: var(--color-${(props) => props.type}-700);
    border-radius: 100px;
    padding: 8px 18px;
    width: fit-content;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
`;

export default Tag;