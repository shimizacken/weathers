import React, {useEffect, useState} from 'react';
import {WeatherCard} from '../views/modules/WeatherCard/WeatherCard.view';

export const WeatherCardContainer: React.FC<{locationName: string}> = ({
    locationName,
}) => {
    const [weatherResult, setWeatherResult] = useState({});

    useEffect(() => {
        // 1. get the weather by location name
        // 2. set the result
        // setWeatherResult();
    }, []);

    return (
        <WeatherCard locationName={locationName} currentTemperature="20C°" />
    );
};
