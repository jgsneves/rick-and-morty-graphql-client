import React from 'react';
import Tab from '../../components/tab';
import { useContentContext } from '../../contexts/contentContext';
import Wrapper from './styles';

const Tabs: React.FC = () => {
  const { content, setContent } = useContentContext();

  function handleClickOnCharsTab() {
    setContent('characteres');
  }

  function handleClickOnEpsTab() {
    setContent('episodes');
  }
  return (
    <Wrapper>
      <Tab
        isOpened={content === 'characteres'}
        name="Personagens"
        onClickTab={handleClickOnCharsTab}
      />
      <Tab
        isOpened={content === 'episodes'}
        name="Episódios"
        onClickTab={handleClickOnEpsTab}
      />
    </Wrapper>
  );
};

export default Tabs;
