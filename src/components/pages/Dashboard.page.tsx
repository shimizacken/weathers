import React from 'react';
import {PersonalWeatherCard} from '../viewModels/PersonalWeatherCard.viewModel';
import {WeatherCardContainer} from '../viewModels/WeatherCard.viewModel';
import {PageContent, WeatherCards} from '../views';

export const Dashboard: React.FC = () => (
    <PageContent>
        <WeatherCards>
            <PersonalWeatherCard />
            <WeatherCardContainer locationName="New York" />
            <WeatherCardContainer locationName="Berlin" />
            <WeatherCardContainer locationName="London" />
        </WeatherCards>
    </PageContent>
);
