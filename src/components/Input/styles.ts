import styled from 'styled-components';

interface InputProps {
}

export const InputComponent = styled.input<InputProps>`
    border-radius: 6px;
    margin: 2%;
    padding: 4%;
    border: 1px solid var(--color-secondary-lighter);
    box-shadow: 0 5px 5px rgb(0,0,0,0.1);
    min-width: 250px;

    ::placeholder {
        opacity: 0.5;
    }
`;