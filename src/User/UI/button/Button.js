import React from 'react';
import { PrimaryButton, SecondaryButton } from './Button.style';

function BaseButton({ children, btnType, type, btnAsLink, to, className, onClickFun }) {
    const checkButtonType = () => {
        switch (btnType) {
            case 'primary':
                return PrimaryButton;
            case 'secondary':
                return SecondaryButton;
            default:
                return PrimaryButton;

        }
    }
    const BaseButton = checkButtonType()

    return (
        <BaseButton as={btnAsLink} type={type} to={to} className={className} onClick={onClickFun}>{children}</BaseButton>
    );
}

export default BaseButton;


