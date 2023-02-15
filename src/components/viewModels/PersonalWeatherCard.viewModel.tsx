import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGetCurrentWeatherByUrl} from '../../hooks/useGetCurrentWeather';
import {getGeoLocation, OpenMapToken, Units} from '../../utils';
import {getFetchWeatherByGeographicCoordinatesFn} from '../../utils/openWeatherMap/api';
import {WeatherCard} from '../views';

const fetchWeatherByGeographicCoordinates =
    getFetchWeatherByGeographicCoordinatesFn(OpenMapToken, Units.celsius.name);

export const PersonalWeatherCard: React.FC = () => {
    const [url, setUrl] = useState('');
    const navigate = useNavigate();
    const weatherResult = useGetCurrentWeatherByUrl(url);

    useEffect(() => {
        const success = (position: GeolocationPosition) => {
            const url = fetchWeatherByGeographicCoordinates(
                position.coords.latitude,
                position.coords.longitude
            );

            setUrl(url);
        };

        const error = () => console.error('Unable to retrieve your location');

        getGeoLocation(success, error);
    }, []);

    if (!weatherResult) {
        return null;
    }

    return (
        <WeatherCard
            locationName={weatherResult.name}
            currentTemperature={weatherResult?.displayCurrentTemperature || ''}
            onClick={() =>
                navigate(`weather/${weatherResult.name.toLocaleLowerCase()}`)
            }
        />
    );
};
