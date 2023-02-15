import React from 'react';
import {useGetCurrentWeather} from '../../hooks/useGetCurrentWeather';
import {WeatherCard} from '../views/modules/WeatherCard/WeatherCard.view';

export const WeatherCardContainer: React.FC<{locationName: string}> = ({
    locationName,
}) => {
    const weatherResult = useGetCurrentWeather(locationName);

    return (
        <WeatherCard
            locationName={locationName}
            currentTemperature={weatherResult?.displayCurrentTemperature || ''}
        />
    );
};
