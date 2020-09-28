import React from 'react';

interface ButtonProps {
    isGreen: boolean;
    id?: string;
    value: string;
    classNames?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <input type="submit" className={props.classNames} id={props.id} value={props.value}/>
    )
    
}

export default Button;