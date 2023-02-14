import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button} from './Button.view';
import {ButtonType} from './buttonType';

export default {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
export const Disabled = Template.bind({});

Primary.args = {
    text: 'Click!',
    buttonType: ButtonType.BUTTON,
};

Disabled.args = {
    ...Primary.args,
    disabled: true,
};
