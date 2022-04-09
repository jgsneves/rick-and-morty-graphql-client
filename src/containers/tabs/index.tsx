import React from 'react';
import Tab from '../../components/tab';
import { useContentContext } from '../../contexts/contentContext';
import Wrapper from './styles';

const Tabs: React.FC = () => {
  const { content, setContent } = useContentContext();

  const isContentEqualChars = content === 'characteres';
  const isContentEqualEps = content === 'episodes';

  function handleClickOnCharsTab() {
    if (isContentEqualEps) setContent('characteres');
  }

  function handleClickOnEpsTab() {
    if (isContentEqualChars) setContent('episodes');
  }
  return (
    <Wrapper>
      <Tab
        isOpened={isContentEqualChars}
        name="Personagens"
        onClickTab={handleClickOnCharsTab}
      />
      <Tab
        isOpened={isContentEqualEps}
        name="Episódios"
        onClickTab={handleClickOnEpsTab}
      />
    </Wrapper>
  );
};

export default Tabs;
