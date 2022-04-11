import { fireEvent, render } from '@testing-library/react';
import Filter, { FilterEpisode } from '..';

describe('Filter test suite', () => {
  const mockedFilterData = {} as FilterEpisode;
  const mockedSetData = jest.fn();
  it('should render proper snapshot', () => {
    const { asFragment } = render(
      <Filter
        label="Filtre por nome"
        filterData={mockedFilterData}
        setData={mockedSetData}
        dataToChange="name"
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('setData should be called once', () => {
    const { getByLabelText } = render(
      <Filter
        label="Filtre por nome"
        filterData={mockedFilterData}
        setData={mockedSetData}
        dataToChange="name"
      />,
    );
    const input = getByLabelText('Filtre por nome');

    fireEvent.change(input, { target: { value: 'casa' } });

    expect(mockedSetData).toBeCalledTimes(1);
    expect(mockedSetData).toBeCalledWith({ name: 'casa' });
  });
});
