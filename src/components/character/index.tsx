import React from 'react';
import { Wrapper, Name, Label, Information, Avatar } from './styles';

interface CharacterProps {
  avatar: string;
  name: string;
  origin: string;
  location: string;
  epsodes: string[];
}

const Character: React.FC<CharacterProps> = ({
  avatar,
  name,
  origin,
  location,
  epsodes,
}: CharacterProps) => {
  function concatEpsodes(eps: string[]): string {
    return eps.reduce((prev, current, index) => {
      if (index > 4) {
        return prev;
      }
      if (index > 3) {
        return `${prev}; +Mais`;
      }
      return `${prev} - ${current}`;
    });
  }
  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Name>{name}</Name>
      <Label>Origem: </Label>
      <Information>{origin}</Information>
      <Label>Localização: </Label>
      <Information>{location}</Information>
      <Label>Episódios: </Label>
      <Information>{concatEpsodes(epsodes)}</Information>
    </Wrapper>
  );
};

export default Character;
