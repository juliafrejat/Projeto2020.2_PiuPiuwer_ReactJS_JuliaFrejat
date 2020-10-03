import styled from 'styled-components';

interface TextareaProps {
}

export const TextareaComponent = styled.textarea<TextareaProps>`
    width: 100%;
    line-height: 20px;
    margin: 2px 10px;
    resize: vertical;
    min-height: auto;
    background-color: var(--color-secondary-lighter);
    padding: 10px 15px;
    border-radius: 20px;
`;