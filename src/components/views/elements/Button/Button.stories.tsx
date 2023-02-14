import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button} from './Button.view';
import {ButtonType} from './buttonType';

export default {
    title: 'Views/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
    <Button {...args}>{args.children}</Button>
);

export const Primary = Template.bind({});
export const Disabled = Template.bind({});
export const NoDesign = Template.bind({});

Primary.args = {
    children: 'Click!',
    buttonType: ButtonType.BUTTON,
};

Disabled.args = {
    ...Primary.args,
    disabled: true,
};

NoDesign.args = {
    ...Primary.args,
    noDesign: true,
};
