import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Text} from './Text.view';

export default {
    title: 'Components/Foundation/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Medium = Template.bind({});
export const Small = Template.bind({});
export const Large = Template.bind({});
export const Huge = Template.bind({});
export const Bold = Template.bind({});

Medium.args = {
    children: 'Some text',
    size: 'medium',
};

Small.args = {
    ...Medium.args,
    size: 'small',
};

Large.args = {
    ...Medium.args,
    size: 'large',
};

Huge.args = {
    ...Medium.args,
    size: 'huge',
};

Bold.args = {
    ...Medium.args,
    size: 'medium',
    weight: 'bold',
};
