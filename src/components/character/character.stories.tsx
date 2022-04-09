import { ComponentMeta, ComponentStory } from '@storybook/react';
import Character from './index';

export default {
  title: 'Character',
  component: Character,
} as ComponentMeta<typeof Character>;

const Template: ComponentStory<typeof Character> = args => (
  <Character {...args} />
);

export const Default = Template.bind({});

Default.args = {
  avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  name: 'Rick Sanchez',
  origin: 'Earth (C-137)',
  location: 'Citadel of Ricks',
  epsodes: [
    'Pilot',
    'Lawnmower Dog',
    'Anatomy Park',
    'M. Night Shaym-Aliens!',
    'Meeseeks and Destroy',
    'Rick Potion #9',
    'Raising Gazorpazorp',
  ],
};
