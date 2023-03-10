import {ComponentStory, ComponentMeta} from '@storybook/react';
import {WeatherCard} from './WeatherCard.view';

export default {
    title: 'Components/Modules/WeatherCard',
    component: WeatherCard,
    parameters: {
        layout: 'centered',
    },
} as ComponentMeta<typeof WeatherCard>;

const Template: ComponentStory<typeof WeatherCard> = args => (
    <WeatherCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    locationName: 'Berlin',
    currentTemperature: '14C°',
};
