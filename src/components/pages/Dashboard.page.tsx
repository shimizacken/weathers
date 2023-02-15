import React from 'react';
import {WeatherCard} from '../views';

export const Dashboard: React.FC = () => (
    <article>
        <WeatherCard locationName="Berlin" currentTemperature="20C°" />
        <WeatherCard locationName="Berlin" currentTemperature="20C°" />
        <WeatherCard locationName="Berlin" currentTemperature="20C°" />
        <WeatherCard locationName="Berlin" currentTemperature="20C°" />
        <WeatherCard locationName="Berlin" currentTemperature="20C°" />
        <WeatherCard locationName="Berlin" currentTemperature="20C°" />
        <WeatherCard locationName="Berlin" currentTemperature="20C°" />
        <WeatherCard locationName="Berlin" currentTemperature="20C°" />
    </article>
);
