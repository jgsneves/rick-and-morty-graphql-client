import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Filter, { FilterCharacter } from '.';

export default {
  title: 'Filter',
  component: Filter,
} as ComponentMeta<typeof Filter>;

interface WrapperProps {
  label: string;
}

const Wrapper: React.FC<WrapperProps> = ({ label }: WrapperProps) => {
  const [filterData, setFilterData] = React.useState<FilterCharacter>({
    name: '',
  });
  return (
    <div>
      <p>{filterData.name}</p>
      <Filter
        label={label}
        filterData={filterData}
        setData={setFilterData}
        dataToChange="name"
      />
    </div>
  );
};

const Template: ComponentStory<typeof Wrapper> = args => <Wrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Filtrar por nome',
};
