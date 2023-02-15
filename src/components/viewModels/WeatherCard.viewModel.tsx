import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useGetCurrentWeather} from '../../hooks/useGetCurrentWeather';
import {WeatherCard} from '../views/modules/WeatherCard/WeatherCard.view';

export const WeatherCardContainer: React.FC<{locationName: string}> = ({
    locationName,
}) => {
    const navigate = useNavigate();
    const weatherResult = useGetCurrentWeather(locationName);

    return (
        <WeatherCard
            locationName={locationName}
            currentTemperature={weatherResult?.displayCurrentTemperature || ''}
            onClick={() =>
                navigate(`weather/${locationName.toLocaleLowerCase()}`)
            }
        />
    );
};
