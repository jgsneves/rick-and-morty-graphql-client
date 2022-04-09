import React from 'react';
import { Wrapper, Title, Information, Label } from './styles';

interface EpisodeProps {
  title: string;
  airDate: string;
  characters: string[];
}

const Episode: React.FC<EpisodeProps> = ({
  title,
  airDate,
  characters,
}: EpisodeProps) => {
  function concatCharacteres(eps: string[]): string {
    return eps.reduce((prev, current, index) => {
      if (index > 11) {
        return prev;
      }
      if (index > 10) {
        return `${prev}; +Mais`;
      }
      return `${prev} - ${current}`;
    });
  }
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Label>Data de lançamento: </Label>
      <Information>{airDate}</Information>
      <Label>Personagens: </Label>
      <Information>{concatCharacteres(characters)}</Information>
    </Wrapper>
  );
};

export default Episode;
