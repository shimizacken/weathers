import React from 'react';
import {Button} from '../../elements/Button/Button.view';
import {Text} from '../../Foundation/Text/Text.view';
import styles from './WeatherCard.module.scss';

export const WeatherCard: React.FC<{
    locationName: string;
    currentTemperature: string;
    onClick?: () => void;
}> = ({locationName, currentTemperature, onClick}) => (
    <Button noDesign onClick={onClick}>
        <div className={styles.weatherCard}>
            <Text size="large">{locationName}</Text>
            <Text size="large">{currentTemperature}</Text>
        </div>
    </Button>
);
