import { render } from '@testing-library/react';
import Spinner from '..';

describe('Spinner test suite', () => {
  it('should render primary color snapshot', () => {
    const { asFragment } = render(<Spinner color="primary" size={50} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render secondary color snapshot', () => {
    const { asFragment } = render(<Spinner color="secondary" size={50} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
