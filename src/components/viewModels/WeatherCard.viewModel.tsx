import React from 'react';
import {NavLink} from 'react-router-dom';
import {useGetCurrentWeather} from '../../hooks/useGetCurrentWeather';
import {WeatherCard} from '../views/modules/WeatherCard/WeatherCard.view';

export const WeatherCardContainer: React.FC<{locationName: string}> = ({
    locationName,
}) => {
    const weatherResult = useGetCurrentWeather(locationName);

    return (
        <NavLink to="weather">
            <WeatherCard
                locationName={locationName}
                currentTemperature={
                    weatherResult?.displayCurrentTemperature || ''
                }
            />
        </NavLink>
    );
};
