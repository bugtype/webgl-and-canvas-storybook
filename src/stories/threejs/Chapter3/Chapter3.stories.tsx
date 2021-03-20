import { Meta, Story } from '@storybook/react';
import { Chapter3 } from './Chapter3';

export default {
  title: 'Threejs/Chapter3',
} as Meta;

const Template1: Story = (args) => {
  return <Chapter3 {...args} />;
};

export const scene1 = Template1.bind({});
