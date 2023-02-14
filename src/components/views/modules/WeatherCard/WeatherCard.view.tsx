import React from 'react';
import {Button} from '../../elements/Button/Button.view';
import {Text} from '../../elements/Text/Text.view';
import styles from './WeatherCard.module.scss';

export const WeatherCard: React.FC = () => (
    <Button noDesign>
        <div className={styles.weatherCard}>
            <Text>Berlin</Text>
            <Text>14c</Text>
        </div>
    </Button>
);
