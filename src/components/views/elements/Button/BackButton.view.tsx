import React from 'react';
import {Button} from './Button.view';
import styles from './Button.module.scss';

export const BackButton: React.FC<{onClick?: () => void}> = ({
    onClick,
    ...props
}) => (
    <Button onClick={onClick} noDesign className={styles.backButton} {...props}>
        ⬅
    </Button>
);
