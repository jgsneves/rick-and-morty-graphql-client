import { fireEvent, render } from '@testing-library/react';
import Pagination from '..';

describe('Pagination teste suite', () => {
  const mockedSetPage = jest.fn();
  it('should render disabled snapshot', () => {
    const { asFragment } = render(
      <Pagination disabled page={1} setPage={mockedSetPage} pageAmount={88} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render normal snapshot', () => {
    const { asFragment } = render(
      <Pagination
        disabled={false}
        page={1}
        setPage={mockedSetPage}
        pageAmount={5}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('mockedSetPage should be called once', async () => {
    const { getByRole } = render(
      <Pagination
        disabled={false}
        page={1}
        setPage={mockedSetPage}
        pageAmount={88}
      />,
    );
    const select = getByRole('combobox', {
      name: /página/i,
    });
    fireEvent.change(select, {
      target: {
        value: 10,
      },
    });
    expect(mockedSetPage).toBeCalledTimes(1);
    expect(mockedSetPage).toBeCalledWith(10);
  });
});
