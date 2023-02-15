import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useGetCurrentWeatherByLocationName} from '../../hooks/useGetCurrentWeather';
import {WeatherCard} from '../views/modules/WeatherCard/WeatherCard.view';

export const WeatherCardContainer: React.FC<{locationName: string}> = ({
    locationName,
}) => {
    const navigate = useNavigate();
    const weatherResult = useGetCurrentWeatherByLocationName(locationName);

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
