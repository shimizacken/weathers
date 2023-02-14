import React from 'react';
import classNames from 'classnames';

import {ButtonType} from './buttonType';
import styles from './Button.module.scss';

export const Button: React.FC<
    React.ComponentProps<'button'> & {
        text?: string;
        disabled?: boolean;
        onClick?: () => void;
        buttonType?: ButtonType;
        dataCy?: string;
    }
> = ({
    text,
    disabled,
    onClick,
    buttonType = ButtonType.BUTTON,
    className,
    dataCy,
}) => (
    <button
        className={classNames(styles.button, className)}
        type={buttonType}
        disabled={disabled}
        onClick={onClick}
        data-cy={dataCy}
    >
        {text}
    </button>
);
