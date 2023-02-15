import React from 'react';
import {useMatch} from 'react-router-dom';
import {useGetCurrentWeather} from '../../hooks/useGetCurrentWeather';
import {DetailedWeather} from '../views';

export const DetailedWeatherContainer: React.FC = () => {
    const matches = useMatch('weather/:locationName');
    const weatherResult = useGetCurrentWeather(
        matches?.params.locationName || ''
    );

    return <DetailedWeather weather={weatherResult} />;
};
