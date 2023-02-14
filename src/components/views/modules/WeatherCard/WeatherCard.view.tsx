import React from 'react';
import {Button} from '../../elements/Button/Button.view';
import {Text} from '../../elements/Text/Text.view';
import styles from './WeatherCard.module.scss';

export const WeatherCard: React.FC<{
    locationName: string;
    degrees: string;
    onClick?: () => void;
}> = ({locationName, degrees, onClick}) => (
    <Button noDesign onClick={onClick}>
        <div className={styles.weatherCard}>
            <Text size="large">{locationName}</Text>
            <Text size="large">{degrees}</Text>
        </div>
    </Button>
);
