import { render } from '@testing-library/react';
import Character from '..';

describe('Character test suite', () => {
  it('should render only four eps', () => {
    const { asFragment } = render(
      <Character
        avatar="https//rickandmortyapi.com/api/character/avatar/1.jpeg"
        name="Rick Sanchez"
        origin="Earth (C-137)"
        location="Citadel of Ricks"
        epsodes={[
          'Pilot',
          'Lawnmower Dog',
          'Anatomy Park',
          'M. Night Shaym-Aliens!',
          'Meeseeks and Destroy',
          'Rick Potion #9',
          'Raising Gazorpazorp',
        ]}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render '+Mais' label", () => {
    const { getByText } = render(
      <Character
        avatar="https//rickandmortyapi.com/api/character/avatar/1.jpeg"
        name="Rick Sanchez"
        origin="Earth (C-137)"
        location="Citadel of Ricks"
        epsodes={[
          'Pilot',
          'Lawnmower Dog',
          'Anatomy Park',
          'M. Night Shaym-Aliens!',
          'Meeseeks and Destroy',
          'Rick Potion #9',
          'Raising Gazorpazorp',
        ]}
      />,
    );
    const label = getByText(
      /pilot - lawnmower dog - anatomy park - m\. night shaym-aliens!; \+mais/i,
    );
    expect(label).toBeInTheDocument();
  });
  it('should render only two eps', () => {
    const { asFragment } = render(
      <Character
        avatar="https//rickandmortyapi.com/api/character/avatar/1.jpeg"
        name="Rick Sanchez"
        origin="Earth (C-137)"
        location="Citadel of Ricks"
        epsodes={['Pilot', 'Lawnmower Dog']}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
