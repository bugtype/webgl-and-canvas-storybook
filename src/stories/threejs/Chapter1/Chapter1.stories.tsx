import { Meta, Story } from '@storybook/react';
import { Chapter1 } from './Chapter1';
import { Chapter1_2 } from './Chapter1-2';
import { Chapter1_3 } from './Chapter1-3';
import { Chapter1_4 } from './Chapter1-4';

export default {
  title: 'Threejs/Chapter1',
} as Meta;

const Template1: Story = (args) => {
  return <Chapter1 {...args} />;
};
const Template2: Story = (args) => {
  return <Chapter1_2 {...args} />;
};
const Template3: Story = (args) => {
  return <Chapter1_3 {...args} />;
};
const Template4: Story = (args) => {
  return <Chapter1_4 {...args} />;
};

export const scene1 = Template1.bind({});
export const scene2 = Template2.bind({});
export const scene3 = Template3.bind({});
export const scene4 = Template4.bind({});
