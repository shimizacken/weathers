import React from 'react';
import cx from 'classnames';
import {Text} from '../../Foundation/Text/Text.view';
import styles from './WeatherCard.module.scss';

export const WeatherCard: React.FC<{
    className?: string;
    locationName: string;
    currentTemperature: string;
    onClick?: () => void;
}> = ({className, locationName, currentTemperature, onClick, ...props}) => (
    <li
        className={cx(styles.weatherCard, className)}
        onClick={onClick}
        role="button"
        {...props}
    >
        <Text size="large">{locationName}</Text>
        <Text size="large">{currentTemperature}</Text>
    </li>
);
