import React, { InputHTMLAttributes } from 'react';

import { InputComponent } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <InputComponent></InputComponent>
    )
    
}

export default Input;