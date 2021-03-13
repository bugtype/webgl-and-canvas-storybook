import { Meta, Story } from '@storybook/react';
import { Chapter1 } from './Chapter1';
import { Chapter1_2 } from './Chapter1-2';

export default {
  title: 'Threejs/Chapter1',
} as Meta;

const Template1: Story = (args) => {
  return <Chapter1 {...args} />;
};
const Template2: Story = (args) => {
  return <Chapter1_2 {...args} />;
};

export const scene1 = Template1.bind({});
export const scene2 = Template2.bind({});
