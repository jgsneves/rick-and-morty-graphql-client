import React from 'react';
import Characteres from '../containers/characteres';
import Episodes from '../containers/episodes';
import Header from '../containers/header';
import Tabs from '../containers/tabs';
import { useContentContext } from '../contexts/contentContext';
import Wrapper from './styles';

const App = () => {
  const { content } = useContentContext();
  return (
    <Wrapper>
      <Header />
      <Tabs />
      {content === 'characteres' && <Characteres />}
      {content === 'episodes' && <Episodes />}
    </Wrapper>
  );
};

export default App;
