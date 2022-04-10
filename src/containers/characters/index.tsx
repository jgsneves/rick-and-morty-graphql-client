import { useQuery } from '@apollo/client';
import React from 'react';
import Character from '../../components/character';
import {
  Characters,
  CharactersVariables,
} from '../../graphql/generated/Characters';
import GET_CHARACTERS from '../../graphql/queries/characteres';
import mapCharEpisodeResponse from '../../mappers/charEpisodeResponse';
import ErrorContainer from '../error';
import Loading from '../loading';
import { Wrapper, Title, Main } from './styles';

const CharactersContainer: React.FC = () => {
  const { data, loading, error } = useQuery<Characters, CharactersVariables>(
    GET_CHARACTERS,
  );
  return (
    <Wrapper>
      <Title>Personagens</Title>
      <Main>
        {loading && <Loading spinnerSize={50} />}
        {data &&
          data.characters?.results?.map(character => (
            <Character
              avatar={character?.image}
              name={character?.name}
              key={character?.name}
              origin={character?.origin?.name}
              location={character?.location?.name}
              epsodes={mapCharEpisodeResponse(character?.episode)}
            />
          ))}
        {error && <ErrorContainer error={error} />}
      </Main>
    </Wrapper>
  );
};

export default CharactersContainer;
