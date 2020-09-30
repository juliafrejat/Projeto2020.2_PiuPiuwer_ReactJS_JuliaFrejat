import React, { ButtonHTMLAttributes } from 'react';

import { ButtonComponent } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    backgroundColor: string;
    hoverBackgroundColor: string;
    textColor: string;
    border: string;
    value: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <ButtonComponent 
            backgroundColor={props.backgroundColor}
            hoverBackgroundColor={props.hoverBackgroundColor}
            textColor={props.textColor}
            border={props.border}
        >
            {props.value}
        </ButtonComponent>
    )
    
}

export default Button;