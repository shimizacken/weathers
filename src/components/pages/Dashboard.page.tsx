import React from 'react';
import {WeatherCardContainer} from '../viewModels/WeatherCard.viewModel';

export const Dashboard: React.FC = () => (
    <article>
        <ul>
            <WeatherCardContainer locationName="Oslo" />
            <WeatherCardContainer locationName="Berlin" />
            <WeatherCardContainer locationName="London" />
        </ul>
    </article>
);
