import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MockedApolloProvider: React.FC<Props> = ({ children }: Props) => {
  const fakeClient = new ApolloClient({
    uri: 'fakeuri',
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={fakeClient}>{children}</ApolloProvider>;
};

export default MockedApolloProvider;
