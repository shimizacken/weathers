import React from 'react';
import {useMatch} from 'react-router-dom';
import {useGetCurrentWeatherByLocationName} from '../../hooks/useGetCurrentWeather';
import {DetailedWeather} from '../views';
import {WeatherTitle} from '../views/modules/WeatherTitle/WeatherTitle.view';

export const DetailedWeatherContainer: React.FC = () => {
    const matches = useMatch('weather/:locationName');
    const weatherResult = useGetCurrentWeatherByLocationName(
        matches?.params.locationName || ''
    );

    return (
        <div>
            {weatherResult?.name && (
                <WeatherTitle locationName={weatherResult.name} />
            )}
            <section>
                <DetailedWeather weather={weatherResult} />
            </section>
        </div>
    );
};
