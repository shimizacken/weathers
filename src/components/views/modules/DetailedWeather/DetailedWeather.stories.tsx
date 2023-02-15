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

// Primary.args = {
//     locationName: 'Berlin',
//     degrees: '14C°',
// };
