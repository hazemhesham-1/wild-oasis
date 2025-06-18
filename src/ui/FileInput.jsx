import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
    font-size: 15px;
    &::file-selector-button {
        background-color: var(--color-brand-600);
        color: var(--color-brand-50);
        border: none;
        border-radius: var(--border-radius-sm);
        padding: 10px 15px;
        margin-right: 15px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.25s;
        
        &:hover {
            background-color: var(--color-brand-700);
        };
    };
`;

export default FileInput;