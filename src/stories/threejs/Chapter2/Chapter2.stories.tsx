import { Meta, Story } from '@storybook/react';
import { Chapter2 } from './Chapter2';
import { Chapter2_2 } from './Chapter2-2';

export default {
  title: 'Threejs/Chapter2',
} as Meta;

const Template1: Story = (args) => {
  return <Chapter2 {...args} />;
};

const Template2: Story = (args) => {
  return <Chapter2_2 {...args} />;
};

export const scene1 = Template1.bind({});

export const scene2 = Template2.bind({});
