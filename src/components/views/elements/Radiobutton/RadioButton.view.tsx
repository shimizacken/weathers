import React from 'react';
import cx from 'classnames';
import styles from './RadioButton.module.scss';
import {Text} from '../../Foundation/Text/Text.view';

export const RadioButton: React.FC<{
    text?: string;
    name?: string;
    checked?: boolean;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    disabled: boolean;
}> = ({
    text,
    name,
    checked,
    className,
    onChange,
    value,
    disabled = false,
    ...props
}) => (
    <label
        className={cx(styles.container, disabled && styles.disabled, className)}
    >
        <Text size="small">{text}</Text>
        <input
            type="radio"
            defaultChecked={checked}
            name={name}
            onChange={onChange}
            value={value}
            disabled={disabled}
            {...props}
        />
        <span className={styles.checkmark}></span>
    </label>
);
