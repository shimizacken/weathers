import React from 'react';
import {DetailedWeatherContainer} from '../viewModels/DetailedWeather.viewModel';
import {PageContent} from '../views';

export const WeatherDetails: React.FC = () => (
    <PageContent>
        <DetailedWeatherContainer />
    </PageContent>
);
