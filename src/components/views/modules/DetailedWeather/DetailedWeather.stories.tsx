import {ComponentStory, ComponentMeta} from '@storybook/react';
import {DetailedWeather} from './DetailedWeather.view';

export default {
    title: 'Components/Modules/DetailedWeather',
    component: DetailedWeather,
    parameters: {
        layout: 'centered',
    },
} as ComponentMeta<typeof DetailedWeather>;

const Template: ComponentStory<typeof DetailedWeather> = args => (
    <DetailedWeather {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    weather: {
        name: 'London',
        country: '',
        currentTemperature: 12,
        minTemperature: 5,
        maxTemperature: 15,
        displayCurrentTemperature: '12°C',
        displayMinTemperature: '5°C',
        displayMaxTemperature: '15°C',
        sunrise: 123,
        sunset: 123,
        visibility: '10',
        humidity: '30',
        icon: '',
    },
};
