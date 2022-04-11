import React from 'react';
import { Logo, RickAndMortyName, Wrapper } from './styles';

const HeaderContainer: React.FC = () => {
  return (
    <Wrapper>
      <RickAndMortyName
        src="https://firebasestorage.googleapis.com/v0/b/enme-b7107.appspot.com/o/name.png?alt=media"
        alt="Rick and Morty"
      />
      <Logo
        src="https://firebasestorage.googleapis.com/v0/b/enme-b7107.appspot.com/o/rick_and_morty.png?alt=media"
        alt="Logo"
      />
    </Wrapper>
  );
};

export default HeaderContainer;
