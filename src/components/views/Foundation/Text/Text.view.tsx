import React from 'react';
import cx from 'classnames';
import {FontSize, FontWeight} from './TextType';
import styles from './Text.module.scss';

export const Text: React.FC<
    React.PropsWithChildren<{
        text?: React.ReactNode;
        className?: string;
        size?: FontSize;
        weight?: FontWeight;
    }>
> = ({children, className, size = 'medium', weight = 'normal', ...props}) => (
    <span className={cx(styles[size], styles[weight], className)} {...props}>
        {children}
    </span>
);
