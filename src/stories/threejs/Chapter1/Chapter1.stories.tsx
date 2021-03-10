import { Meta, Story } from '@storybook/react';
import { Chapter1 } from './Chapter1';

export default {
  title: 'Threejs/Chapter1',
} as Meta;

const Template1: Story = (args) => {
  return <Chapter1 {...args} />;
};

export const scene1 = Template1.bind({});
