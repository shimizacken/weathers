import {ComponentStory, ComponentMeta} from '@storybook/react';
import {RadioButton} from './RadioButton.view';

export default {
    title: 'Components/Elements/RadioButton',
    component: RadioButton,
    parameters: {
        layout: 'centered',
    },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = args => (
    <RadioButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    text: 'Theme',
};
