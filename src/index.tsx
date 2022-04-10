import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import ReactDOM from 'react-dom';
import App from './App/index';
import { ContentContextProvider } from './contexts/contentContext';
import GlobalStyles from './styles/globalStyles';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ContentContextProvider>
      <App />
      <GlobalStyles />
    </ContentContextProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
