import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGetCurrentWeatherByUrl} from '../../hooks/useGetCurrentWeather';
import {unitSignal} from '../../signals/unit.signals';
import {getGeoLocation, OpenMapToken, Units} from '../../utils';
import {getFetchWeatherByGeographicCoordinatesFn} from '../../utils/openWeatherMap/api';
import {PersonalWeatherCard as PersonalWeatherCardView} from '../views';

const getPersistedUnit = () => {
    let unit = localStorage.getItem('_unit_');

    if (!unit) {
        return Units.celsius.value;
    }

    return unit;
};

const fetchWeatherByGeographicCoordinates =
    getFetchWeatherByGeographicCoordinatesFn(OpenMapToken);

export const PersonalWeatherCard: React.FC = () => {
    const [url, setUrl] = useState('');
    const [unit, setUnit] = useState(
        localStorage.getItem('_unit_') ?? Units.celsius.value
    );
    const navigate = useNavigate();
    const weatherResult = useGetCurrentWeatherByUrl(url, unit);

    useEffect(() => {
        const success = (position: GeolocationPosition) => {
            const url = fetchWeatherByGeographicCoordinates(
                getPersistedUnit(),
                position.coords.latitude,
                position.coords.longitude
            );

            setUrl(url);
        };

        const error = () => console.error('Unable to retrieve your location');

        getGeoLocation(success, error);
    }, [unit]);

    useEffect(() => {
        unitSignal.watch(unit => {
            if (unit) {
                setUnit(unit);
            }
        });
    }, []);

    if (!weatherResult) {
        return null;
    }

    return (
        <PersonalWeatherCardView
            locationName={weatherResult.name}
            currentTemperature={weatherResult?.displayCurrentTemperature || ''}
            onClick={() =>
                navigate(`weather/${weatherResult.name.toLocaleLowerCase()}`)
            }
        />
    );
};
