import React from 'react';
import {WeatherCardContainer} from '../viewModels/WeatherCard.viewModel';
import {PageContent, WeatherCards} from '../views';

export const Dashboard: React.FC = () => (
    <PageContent>
        <WeatherCards>
            <WeatherCardContainer locationName="Oslo" />
            <WeatherCardContainer locationName="Berlin" />
            <WeatherCardContainer locationName="London" />
        </WeatherCards>
    </PageContent>
);
