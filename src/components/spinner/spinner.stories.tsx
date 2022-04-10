import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import Spinner from '.';
import Colors from '../../styles/colors';

export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.background};
`;

const Text = styled.h3`
  color: ${Colors.primary};
  font-family: 'Inter', sans-serif;
`;

const Template: ComponentStory<typeof Spinner> = args => (
  <Wrapper>
    <Spinner {...args} />
    <Text>Carregando</Text>
  </Wrapper>
);

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  size: 50,
  color: 'primary',
};

Secondary.args = {
  size: 50,
  color: 'secondary',
};
