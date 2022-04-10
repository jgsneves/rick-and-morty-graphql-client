/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import Pagination from '.';
import Colors from '../../styles/colors';

export default {
  title: 'Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Wrapper = styled.div`
  background-color: ${Colors.background};
`;

const Template: ComponentStory<typeof Pagination> = args => {
  const [page, setPage] = React.useState<number>(1);
  return (
    <Wrapper>
      <p>Page: {page}</p>
      <Pagination
        page={page}
        setPage={setPage}
        pageAmount={args.pageAmount}
        disabled={args.disabled}
      />
    </Wrapper>
  );
};

export const Default = Template.bind({});

Default.args = {
  pageAmount: 88,
  disabled: false,
};
