import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tab from '.';

export default {
  title: 'Tab',
  component: Tab,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: ['Personagens', 'Episódios'],
      },
    },
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = args => <Tab {...args} />;

export const Default = Template.bind({});

Default.args = {
  isOpened: false,
};
