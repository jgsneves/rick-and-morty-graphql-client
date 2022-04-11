import { render, waitFor, fireEvent } from '@testing-library/react';
import EpisodesContainer from '..';
import MockedApolloProvider from '../../../mocks/apolloProvider';

describe('Episodes test suite', () => {
  it('should render two episodes', async () => {
    const { getByRole } = render(
      <MockedApolloProvider>
        <EpisodesContainer />
      </MockedApolloProvider>,
    );
    await waitFor(() => {
      const titleOne = getByRole('heading', {
        name: /a casa de papel/i,
      });
      const titleTwo = getByRole('heading', {
        name: /ep 2/i,
      });
      expect(titleOne).toBeInTheDocument();
      expect(titleTwo).toBeInTheDocument();
    });
  });
  it('should render error message', async () => {
    const { getByRole, getByText } = render(
      <MockedApolloProvider>
        <EpisodesContainer />
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
        'Não foi possível encontrar os episódios.',
      );

      expect(errorTitle).toBeInTheDocument();
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
