import React, { InputHTMLAttributes } from 'react';

import { InputComponent } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <InputComponent 
            placeholder={props.placeholder}
            type={props.type}
            onChange={props.onChange}
        >

        </InputComponent>
    )
    
}

export default Input;