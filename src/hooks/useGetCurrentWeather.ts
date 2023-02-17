import {useEffect, useState} from 'react';
import type {WeatherResult} from '../types/types';
import {request} from '../utils/common/fetch';
import {getTimeFromTimestamp, OpenMapToken, Units} from '../utils';
import {getBuildWeatherByCityNameUrlFn} from '../utils/openWeatherMap/api';
import {getSymbolByValue} from '../utils';

const getPersistedUnit = () => {
    let unit = localStorage.getItem('_unit_');

    if (!unit) {
        return Units.celsius.value;
    }

    return unit;
};

const buildWeatherByCityNameUrl = getBuildWeatherByCityNameUrlFn(OpenMapToken);

const symbol = getSymbolByValue(getPersistedUnit());

export const buildWeather = (result: any) => {
    const {main} = result;
    const city = result.weather?.[0];

    const weatherResult: WeatherResult = {
        name: result.name,
        description: city?.description,
        displayCurrentTemperature: `${main?.temp}${symbol}`,
        displayMinTemperature: `${main?.temp_min}${symbol}`,
        displayMaxTemperature: `${main?.temp_max}${symbol}`,
        humidity: `${main?.humidity}%`,
        visibility: `${result.visibility}km`,
        sunrise: getTimeFromTimestamp(result.sys?.sunrise),
        sunset: getTimeFromTimestamp(result.sys?.sunset),
        icon: city?.icon,
    };

    return weatherResult;
};

export const useGetCurrentWeatherByUrl = (url: string, unit: string) => {
    const [weatherResult, setWeatherResult] = useState<WeatherResult>();

    useEffect(() => {
        if (!url || !unit) {
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
    }, [url, unit]);

    return weatherResult;
};

export const useGetCurrentWeatherByLocationName = (
    locationName: string,
    unit: string
) => {
    const [weatherResult, setWeatherResult] = useState<WeatherResult>();

    useEffect(() => {
        let shouldUpdate = true;

        const url = buildWeatherByCityNameUrl(unit, locationName);

        request(url).then(result => {
            const weatherResult = buildWeather(result);

            if (shouldUpdate) {
                setWeatherResult(weatherResult);
            }

            return () => {
                shouldUpdate = false;
            };
        });
    }, [locationName, unit]);

    return weatherResult;
};
