import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGetCurrentWeatherByLocationName} from '../../hooks/useGetCurrentWeather';
import {unitSignal} from '../../signals/unit.signals';
import {Units} from '../../utils';
import {WeatherCard} from '../views/modules/WeatherCard/WeatherCard.view';

export const WeatherCardContainer: React.FC<{locationName: string}> = ({
    locationName,
}) => {
    const navigate = useNavigate();
    const [unit, setUnit] = useState(
        localStorage.getItem('_unit_') ?? Units.celsius.value
    );
    const weatherResult = useGetCurrentWeatherByLocationName(
        locationName,
        unit
    );

    useEffect(() => {
        unitSignal.watch(unit => {
            if (unit) {
                setUnit(unit);
            }
        });
    }, []);

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
