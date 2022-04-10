import React from 'react';
import { Wrapper, Name, Label, Information, Avatar } from './styles';

interface CharacterProps {
  avatar: string | null | undefined;
  name: string | null | undefined;
  origin: string | null | undefined;
  location: string | null | undefined;
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
  const imageFallback =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png';
  return (
    <Wrapper>
      <Avatar src={avatar ?? imageFallback} />
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
