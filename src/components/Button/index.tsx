import React, { ButtonHTMLAttributes } from 'react';

import { ButtonComponent } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isGreen: boolean;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    textColor?: string;
    border?: string;
    value: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    const isGreen = props.isGreen;
    if (isGreen) {
        return (
            <ButtonComponent 
                backgroundColor="var(--color-primary)"
                hoverBackgroundColor="var(--color-primary-dark)"
                textColor="#FFFFFF"
                border="none"
                type={props.type}
            >
                {props.value}
            </ButtonComponent>
        )
        
    } else {
        return (
            <ButtonComponent 
                backgroundColor="#FFFFFF"
                hoverBackgroundColor="var(--color-secondary-lighter)"
                textColor="var(--color-primary)"
                border="2px solid var(--color-primary)"
                type={props.type}
            >
                {props.value}
            </ButtonComponent>
        )
    }

}

export default Button;