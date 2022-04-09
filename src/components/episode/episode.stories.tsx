import { ComponentMeta, ComponentStory } from '@storybook/react';
import Episode from '.';

export default {
  title: 'Episode',
  component: Episode,
} as ComponentMeta<typeof Episode>;

const Template: ComponentStory<typeof Episode> = args => <Episode {...args} />;

export const Default = Template.bind({});

Default.args = {
  airDate: 'December 2, 2013',
  title: 'Pilot',
  characters: [
    'Rick Sanchez',
    'Morty Smith',
    'Bepisian',
    'Beth Smith',
    'Canklanker Thom',
    'Davin',
    'Frank Palicky',
    'Glenn',
    'Hookah Alien',
    'Jerry Smith',
    'Jessica',
    "Jessica's Friend",
    'Mr. Goldenfold',
    'Mrs. Sanchez',
    'Principal Vagina',
  ],
};
