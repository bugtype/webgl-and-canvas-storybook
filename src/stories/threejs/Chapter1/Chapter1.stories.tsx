import { Meta, Story } from '@storybook/react';
import { Chapter1 } from './Chapter1';
import { Chapter1_2 } from './Chapter1-2';
import { Chapter1_3 } from './Chapter1-3';
import { Chapter1_4 } from './Chapter1-4';
import { Chapter1_5 } from './Chapter1-5';
import { Chapter1_6 } from './Chapter1-6';

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

const Template5: Story = (args) => {
  return <Chapter1_5 {...args} />;
};

const Template6: Story = (args) => {
  return <Chapter1_6 {...args} />;
};

export const scene1 = Template1.bind({});
export const scene2 = Template2.bind({});
export const scene3 = Template3.bind({});
export const scene4 = Template4.bind({});
export const scene5 = Template5.bind({});
// 제대로 되는지 모르겠다.
export const scene6onResize = Template6.bind({});
