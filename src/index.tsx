import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import ReactDOM from 'react-dom';
import App from './App/index';
import { ContentContextProvider } from './contexts/contentContext';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ContentContextProvider>
      <App />
    </ContentContextProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
