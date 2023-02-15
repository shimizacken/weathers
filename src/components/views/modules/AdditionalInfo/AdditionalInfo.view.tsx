import React from 'react';
import cx from 'classnames';
import {Text} from '../../Foundation/Text/Text.view';
import styles from './AdditionalInfo.module.scss';

export const AdditionalInfo: React.FC<{
    name: string;
    value: string;
    className?: string;
}> = ({name, value, className}) => {
    return (
        <div className={cx(styles.wrapper, className)}>
            <Text size="small">{name}</Text>
            <Text size="large">{value}</Text>
        </div>
    );
};
