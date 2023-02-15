import React from 'react';
import {Text} from '../../Foundation/Text/Text.view';
import styles from './WeatherCard.module.scss';

export const WeatherCard: React.FC<{
    locationName: string;
    currentTemperature: string;
    onClick?: () => void;
}> = ({locationName, currentTemperature, onClick}) => (
    <div className={styles.weatherCard}>
        <Text size="large">{locationName}</Text>
        <Text size="large">{currentTemperature}</Text>
    </div>
);
