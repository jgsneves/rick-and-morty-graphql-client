import React from 'react';
import { Label, Wrapper, TextInput } from './styles';

export interface FilterCharacter {
  name: string;
}

export interface FilterEpisode {
  name: string;
}

type filterDataKeys = keyof FilterCharacter | keyof FilterEpisode;

interface FilterProps {
  label: string;
  dataToChange: filterDataKeys;
  filterData: FilterCharacter | FilterEpisode;
  setData: React.Dispatch<
    React.SetStateAction<FilterCharacter | FilterEpisode>
  >;
}
const Filter: React.FC<FilterProps> = ({
  label,
  dataToChange,
  filterData,
  setData,
}: FilterProps) => {
  function handleTextInputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setData({ ...filterData, [dataToChange]: value });
  }
  return (
    <Wrapper>
      <Label htmlFor={dataToChange}>{label}</Label>
      <TextInput
        id={dataToChange}
        type="text"
        onChange={handleTextInputOnChange}
        value={filterData[dataToChange]}
      />
    </Wrapper>
  );
};

export default Filter;
