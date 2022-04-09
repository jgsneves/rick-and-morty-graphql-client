import { render } from '@testing-library/react';
import Tab from '..';

describe('Tab test suite', () => {
  it('should render Episodes closed tab', () => {
    const { asFragment } = render(<Tab isOpened={false} name="Episódios" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render Episodes opened tab', () => {
    const { asFragment } = render(<Tab isOpened name="Episódios" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render Characteres closed tab', () => {
    const { asFragment } = render(<Tab isOpened={false} name="Personagens" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render Characteres opened tab', () => {
    const { asFragment } = render(<Tab isOpened name="Personagens" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
