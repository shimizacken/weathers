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
        displayCurrentTemperature: '12°C',
        displayMinTemperature: '5°C',
        displayMaxTemperature: '15°C',
        sunrise: '05:20',
        sunset: '20:30',
        visibility: '10',
        humidity: '30',
        icon: '',
    },
};
