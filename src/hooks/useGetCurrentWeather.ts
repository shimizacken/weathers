import {useEffect, useState} from 'react';
import type {WeatherResult} from '../types/types';
import {request} from '../utils/common/fetch';
import {getTimeFromTimestamp, OpenMapToken, Units} from '../utils';
import {getBuildWeatherByCityNameUrlFn} from '../utils/openWeatherMap/api';

const buildWeatherByCityNameUrl = getBuildWeatherByCityNameUrlFn(
    OpenMapToken,
    Units.celsius.value
);

export const buildWeather = (result: any) => {
    const {main} = result;
    const city = result.weather?.[0];

    const weatherResult: WeatherResult = {
        name: result.name,
        description: city?.description,
        displayCurrentTemperature: `${main?.temp}${Units.celsius.symbol}`,
        displayMinTemperature: `${main?.temp_min}${Units.celsius.symbol}`,
        displayMaxTemperature: `${main?.temp_max}${Units.celsius.symbol}`,
        humidity: `${main?.humidity}%`,
        visibility: `${result.visibility}km`,
        sunrise: getTimeFromTimestamp(result.sys?.sunrise),
        sunset: getTimeFromTimestamp(result.sys?.sunset),
        icon: city?.icon,
    };

    return weatherResult;
};

export const useGetCurrentWeatherByUrl = (url: string) => {
    const [weatherResult, setWeatherResult] = useState<WeatherResult>();

    useEffect(() => {
        if (!url) {
            return;
        }

        let shouldUpdate = true;

        request(url).then(result => {
            const weatherResult = buildWeather(result);

            if (shouldUpdate) {
                setWeatherResult(weatherResult);
            }

            return () => {
                shouldUpdate = false;
            };
        });
    }, [url]);

    return weatherResult;
};

export const useGetCurrentWeatherByLocationName = (locationName: string) => {
    const [weatherResult, setWeatherResult] = useState<WeatherResult>();

    useEffect(() => {
        let shouldUpdate = true;

        const url = buildWeatherByCityNameUrl(locationName);

        request(url).then(result => {
            const weatherResult = buildWeather(result);

            if (shouldUpdate) {
                setWeatherResult(weatherResult);
            }

            return () => {
                shouldUpdate = false;
            };
        });
    }, [locationName]);

    return weatherResult;
};
