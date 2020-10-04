import React, { TextareaHTMLAttributes } from 'react';

import { TextareaComponent } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id?: string;
    classNames?: string;
    placeholder?: string;
    value: string;
    onChange(e: any): void;
    isNotActive?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ id, classNames, placeholder, value, onChange, isNotActive }) => {
    return (
        <TextareaComponent
            id={id}
            className={classNames}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            isNotActive={isNotActive}
        >
        </TextareaComponent>
    )
    
}

export default Textarea;