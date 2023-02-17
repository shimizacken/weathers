import React from 'react';
import {WeatherCard} from './WeatherCard.view';
import styles from './WeatherCard.module.scss';

export const PersonalWeatherCard: React.FC<
    React.ComponentProps<typeof WeatherCard>
> = ({...props}) => (
    <WeatherCard {...props} className={styles.personalWeatherCard} />
);
