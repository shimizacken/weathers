import React, {useEffect, useState} from 'react';
import {useMatch} from 'react-router-dom';
import {useGetCurrentWeatherByLocationName} from '../../hooks/useGetCurrentWeather';
import {unitSignal} from '../../signals/unit.signals';
import {Units} from '../../utils';
import {DetailedWeather} from '../views';
import {WeatherTitle} from '../views/modules/WeatherTitle/WeatherTitle.view';

export const DetailedWeatherContainer: React.FC = () => {
    const matches = useMatch('weather/:locationName');
    const [unit, setUnit] = useState(
        localStorage.getItem('_unit_') ?? Units.celsius.value
    );
    const weatherResult = useGetCurrentWeatherByLocationName(
        matches?.params.locationName || '',
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
