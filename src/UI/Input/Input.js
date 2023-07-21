import React from 'react';
import { BaseInput } from './Input.style';

function Input({ name, className, type, size, id, label, inputType }) {
    return (
        <BaseInput
            name={name}
            className={className}
            type={type}
            size={size}
            id={id}
            label={label}
            variant={inputType}
        />
    );
}

export default Input;