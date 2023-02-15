import {useEffect, useState} from 'react';
import type {WeatherResult} from '../types/types';
import {request} from '../utils/common/fetch';
import {getTimeFromTimestamp, OpenMapToken, Units} from '../utils';
import {buildFetchWeatherByCityName} from '../utils/openWeatherMap/api';

export const useGetCurrentWeatherByLocationName = (locationName: string) => {
    const [weatherResult, setWeatherResult] = useState<WeatherResult>();

    useEffect(() => {
        let shouldUpdate = true;

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
                displayCurrentTemperature: `${main?.temp}${Units.celsius.symbol}`,
                displayMinTemperature: `${main?.temp_min}${Units.celsius.symbol}`,
                displayMaxTemperature: `${main?.temp_max}${Units.celsius.symbol}`,
                humidity: `${main?.humidity}%`,
                visibility: `${result.visibility}km`,
                sunrise: getTimeFromTimestamp(result.sys?.sunrise),
                sunset: getTimeFromTimestamp(result.sys?.sunset),
                icon: city?.icon,
            };

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
