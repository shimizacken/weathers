import {useEffect, useState} from 'react';
import type {WeatherResult} from '../types/types';
import {request} from '../utils/common/fetch';
import {OpenMapToken, Units} from '../utils/openWeatherMap';
import {buildFetchWeatherByCityName} from '../utils/openWeatherMap/api';

export const useGetCurrentWeather = (locationName: string) => {
    const [weatherResult, setWeatherResult] = useState<WeatherResult>();

    useEffect(() => {
        const searchByCityNameUrl = buildFetchWeatherByCityName(
            OpenMapToken,
            Units.celsius.value
        );

        const url = searchByCityNameUrl(locationName);

        request(url).then(result => {
            const {main} = result;
            const city = result.weather?.[0];

            const weatherResult: WeatherResult = {
                name: result.name,
                description: city?.description,
                country: result.sys?.country,
                currentTemperature: main?.temp,
                displayCurrentTemperature: `${main?.temp}${Units.celsius.symbol}`,
                minTemperature: main?.temp_min,
                maxTemperature: main?.temp_max,
                displayMinTemperature: `${main?.temp_min}${Units.celsius.symbol}`,
                displayMaxTemperature: `${main?.temp_max}${Units.celsius.symbol}`,
                humidity: main?.humidity,
                visibility: result.visibility,
                sunrise: result.sys?.sunrise,
                sunset: result.sys?.sunset,
                icon: city?.icon,
            };

            setWeatherResult(weatherResult);
        });
    }, [locationName]);

    return weatherResult;
};
