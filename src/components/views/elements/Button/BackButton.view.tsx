import React from 'react';
import {Button} from './Button.view';
import styles from './Button.module.scss';

export const BackButton: React.FC<{onClick?: () => void}> = ({onClick}) => (
    <Button onClick={onClick} noDesign className={styles.backButton}>
        ⬅
    </Button>
);
