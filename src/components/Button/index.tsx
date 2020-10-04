import React, { ButtonHTMLAttributes } from 'react';

import { ButtonComponent } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isGreen: boolean;
    value: string;
    onClick?(e: any): Promise<void>;
    isNotActive?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <ButtonComponent
            isGreen={props.isGreen}
            type={props.type}
            onClick={props.onClick}
            isNotActive={props.isNotActive}
        >
            {props.value}
        </ButtonComponent>
    )

}

export default Button;