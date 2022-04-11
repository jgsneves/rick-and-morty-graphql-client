import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import ReactDOM from 'react-dom';
import App from './App/index';
import { ContentProvider } from './contexts/contentContext';
import GlobalStyles from './styles/globalStyles';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ContentProvider>
      <App />
      <GlobalStyles />
    </ContentProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
