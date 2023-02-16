import React from 'react';
import cx from 'classnames';
import styles from './RadioButton.module.scss';

export const RadioButton: React.FC<{
    text?: string;
    name?: string;
    checked?: boolean;
    className?: string;
    onChange: () => void;
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
        <span>{text}</span>
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
