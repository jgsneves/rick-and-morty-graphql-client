import React from 'react';
import Button from './styles';

interface TabProps {
  isOpened: boolean;
  name: 'Personagens' | 'Episódios';
}

const Tab: React.FC<TabProps> = ({ isOpened, name }: TabProps) => {
  return (
    <Button isOpened={isOpened} type="button">
      {name}
    </Button>
  );
};

export default Tab;
