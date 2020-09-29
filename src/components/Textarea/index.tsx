import React, { TextareaHTMLAttributes } from 'react';

import { TextareaComponent } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id?: string;
    classNames?: string;
    placeholder?: string;
}

const Textarea: React.FC<TextareaProps> = (props) => {
    return (
        <TextareaComponent
            id={props.id}
            className={props.classNames}
            placeholder={props.placeholder}
        >
        </TextareaComponent>
    )
    
}

export default Textarea;