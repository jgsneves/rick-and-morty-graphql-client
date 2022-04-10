import React from 'react';
import { Wrapper, Label, Select } from './styles';

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageAmount: number;
  disabled: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  setPage,
  pageAmount,
  disabled,
}: PaginationProps) => {
  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;
    setPage(Number(value));
  }
  function getOptions(quantity: number): JSX.Element[] {
    return Array.from({ length: quantity }, (_, i) => i + 1).map(number => (
      <option value={number} key={number}>
        {number}
      </option>
    ));
  }
  return (
    <Wrapper>
      <Label htmlFor="select">Página</Label>
      <Select
        id="select"
        value={page}
        onChange={event => handleSelectChange(event)}
        disabled={disabled}
      >
        {getOptions(pageAmount)}
      </Select>
    </Wrapper>
  );
};

export default Pagination;
