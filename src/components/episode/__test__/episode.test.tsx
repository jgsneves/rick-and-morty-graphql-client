import { render } from '@testing-library/react';
import Episode from '..';

describe('Episode test suite', () => {
  it('should render only 11 characteres', () => {
    const { asFragment } = render(
      <Episode
        airDate="December 2, 2013"
        title="Pilot"
        characters={[
          'Rick Sanchez',
          'Morty Smith',
          'Bepisian',
          'Beth Smith',
          'Canklanker Thom',
          'Davin',
          'Frank Palicky',
          'Glenn',
          'Hookah Alien',
          'Jerry Smith',
          'Jessica',
          "Jessica's Friend",
          'Mr. Goldenfold',
          'Mrs. Sanchez',
          'Principal Vagina',
        ]}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render "+Mais" label', () => {
    const { getByText } = render(
      <Episode
        airDate="December 2, 2013"
        title="Pilot"
        characters={[
          'Rick Sanchez',
          'Morty Smith',
          'Bepisian',
          'Beth Smith',
          'Canklanker Thom',
          'Davin',
          'Frank Palicky',
          'Glenn',
          'Hookah Alien',
          'Jerry Smith',
          'Jessica',
          "Jessica's Friend",
          'Mr. Goldenfold',
          'Mrs. Sanchez',
          'Principal Vagina',
        ]}
      />,
    );
    const chars = getByText(
      /rick sanchez - morty smith - bepisian - beth smith - canklanker thom - davin - frank palicky - glenn - hookah alien - jerry smith - jessica; \+mais/i,
    );
    expect(chars).toBeInTheDocument();
  });
  it('should render 3 characteres', () => {
    const { asFragment } = render(
      <Episode
        airDate="December 2, 2013"
        title="Pilot"
        characters={['Rick Sanchez', 'Morty Smith', 'Bepisian']}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
