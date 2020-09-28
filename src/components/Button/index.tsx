import React, { ButtonHTMLAttributes } from 'react';

import { ButtonComponent } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    backgroundColor: string;
    textColor: string;
    border: string;
    id?: string;
    value: string;
    classNames?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <ButtonComponent 
            backgroundColor={props.backgroundColor}
            textColor={props.textColor}
            border={props.border}
            id={props.id}
            className={props.classNames} 
        >
            {props.value}
        </ButtonComponent>
    )
    
}

export default Button;