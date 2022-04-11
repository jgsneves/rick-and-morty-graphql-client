import { fireEvent, render, waitFor } from '@testing-library/react';
import CharactersContainer from '..';
import MockedApolloProvider from '../../../mocks/apolloProvider';

describe('CharactersContainer test suite', () => {
  it('should render two characters', async () => {
    const { getByRole } = render(
      <MockedApolloProvider>
        <CharactersContainer />
      </MockedApolloProvider>,
    );

    await waitFor(() => {
      const firstCharName = getByRole('heading', {
        name: /joão neves/i,
      });

      const secondCharName = getByRole('heading', {
        name: /josé santos/i,
      });
      expect(firstCharName).toBeInTheDocument();
      expect(secondCharName).toBeInTheDocument();
    });
  });
  it('should render error message', async () => {
    const { getByRole, getByText } = render(
      <MockedApolloProvider>
        <CharactersContainer />
      </MockedApolloProvider>,
    );

    await waitFor(() => {
      const select = getByRole('combobox', {
        name: /página/i,
      });

      fireEvent.change(select, { target: { value: 2 } });

      const errorTitle = getByText(
        'Houve algum erro! Contate o suporte para maiores informações',
      );
      const errorMessage = getByText(
        'Houve algum erro de conexão. Tente novamente',
      );

      expect(errorTitle).toBeInTheDocument();
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
