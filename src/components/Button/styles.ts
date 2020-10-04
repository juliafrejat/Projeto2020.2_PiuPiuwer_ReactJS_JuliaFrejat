import styled from 'styled-components';

interface ButtonProps {
    isGreen: boolean;
    isNotActive?: boolean;
}

export const ButtonComponent = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: fit-content;
    padding: 10px 20px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    border-radius: 20px;

    font-family: 'Zilla Slab','Courier New',Courier,serif;
    text-rendering: optimizeLegibility !important;
    
    color: ${props => props.isGreen ? '#FFFFFF' : 'var(--color-primary)'};
    border: ${props => props.isGreen ? 'none' : '2px solid var(--color-primary)'};
    background-color: ${props => props.isGreen ? 'var(--color-primary)' : '#FFFFFF'};
    opacity: ${props => props.isNotActive ? '0.8' : '1'};

    &:hover {
        background-color: ${props => (props.isNotActive) ? 'var(--color-primary)' : 'var(--color-primary-dark)'};
    }
`;