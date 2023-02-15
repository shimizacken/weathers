import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AdditionalInfo} from './AdditionalInfo.view';

export default {
    title: 'Components/Modules/AdditionalInfo',
    component: AdditionalInfo,
    parameters: {
        layout: 'centered',
    },
} as ComponentMeta<typeof AdditionalInfo>;

const Template: ComponentStory<typeof AdditionalInfo> = args => (
    <AdditionalInfo {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    name: 'Sunrise',
    value: '05:40',
};
