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

export const Primary = Template.bind({});

Primary.args = {
    children: 'Some text',
    size: 'medium',
};
