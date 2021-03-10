import { Meta, Story } from '@storybook/react';
import { Square } from './Square';
import { Square2 } from './Square2';

export default {
  title: 'Playground/Square',
  argTypes: {
    speed: {
      defaultValue: 0.001,
      control: { type: 'range', min: 0.001, max: 0.1, step: 0.005 },
    },
    color: {
      defaultValue: 'rgb(126, 49, 235)',
      control: { type: 'color' },
    },
  },
} as Meta;

const Template1: Story = () => {
  return <Square />;
};

const Template2: Story = (args) => {
  return <Square2 {...args} />;
};

export const playgroundScene = Template1.bind({});

export const playgroundScene2 = Template2.bind({});
