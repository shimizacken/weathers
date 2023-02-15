import React from 'react';
import {useMatches} from 'react-router-dom';
import {useGetCurrentWeather} from '../../hooks/useGetCurrentWeather';
import {DetailedWeather} from '../views';

export const DetailedWeatherContainer: React.FC = () => {
    const matches = useMatches();
    const weatherResult = useGetCurrentWeather(
        matches[0].params.locationName || ''
    );

    return <DetailedWeather weather={weatherResult} />;
};
