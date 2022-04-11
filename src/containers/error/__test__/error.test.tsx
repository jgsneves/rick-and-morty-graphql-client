import { ApolloError } from '@apollo/client';
import { render } from '@testing-library/react';
import { GraphQLError } from 'graphql';
import ErrorContainer from '..';

describe('ErrorContainer test suite', () => {
  it('should render snapshot', () => {
    const errorMessage = 'Não foi possível conectar com o servidor.';
    const graphqlError = new GraphQLError(errorMessage);
    const error = new ApolloError({ graphQLErrors: [graphqlError] });

    const { getByText } = render(
      <ErrorContainer error={error} content="Episódio" />,
    );

    const result = getByText(errorMessage);
    const title = getByText(
      'Houve algum erro! Contate o suporte para maiores informações',
    );

    expect(result).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
