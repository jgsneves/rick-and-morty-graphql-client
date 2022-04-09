import React from 'react';
import Button from './styles';

interface TabProps {
  isOpened: boolean;
  name: 'Personagens' | 'Episódios';
  onClickTab: React.MouseEventHandler<HTMLButtonElement>;
}

const Tab: React.FC<TabProps> = ({ isOpened, name, onClickTab }: TabProps) => {
  return (
    <Button isOpened={isOpened} type="button" onClick={onClickTab}>
      {name}
    </Button>
  );
};

export default Tab;
