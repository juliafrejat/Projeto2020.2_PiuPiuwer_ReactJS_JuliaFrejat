import styled from 'styled-components';

interface ButtonProps {
    textColor: string;
    border: string;
    backgroundColor: string;
    hoverBackgroundColor: string;
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
    
    color:${props => props.textColor};
    border:${props => props.border};
    background-color:${props => props.backgroundColor};

    &:hover {
        background-color:${props => props.hoverBackgroundColor};
    }
`;