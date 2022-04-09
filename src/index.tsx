import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index';
import { ContentContextProvider } from './contexts/contentContext';

ReactDOM.render(
  <ContentContextProvider>
    <App />
  </ContentContextProvider>,
  document.getElementById('root'),
);
