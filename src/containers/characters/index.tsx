import { useQuery } from '@apollo/client';
import React from 'react';
import Character from '../../components/character';
import Filter, { FilterCharacter } from '../../components/filter';
import Pagination from '../../components/pagination';
import {
  Characters,
  CharactersVariables,
} from '../../graphql/generated/Characters';
import GET_CHARACTERS from '../../graphql/queries/characteres';
import mapCharEpisodeResponse from '../../mappers/charEpisodeResponse';
import ErrorContainer from '../error';
import Loading from '../loading';
import { Wrapper, Title, Main, FilterSection } from './styles';

const CharactersContainer: React.FC = () => {
  const [page, setPage] = React.useState<number>(1);

  const [filterData, setFilterData] = React.useState<FilterCharacter>({
    name: '',
  });

  const { data, loading, error } = useQuery<Characters, CharactersVariables>(
    GET_CHARACTERS,
    {
      variables: {
        page,
        filter: filterData,
      },
    },
  );
  return (
    <Wrapper>
      <Title>Personagens</Title>
      <Pagination
        page={page}
        pageAmount={data?.characters?.info?.pages ?? 10}
        setPage={setPage}
        disabled={loading}
      />
      <FilterSection>
        <Filter
          label="Filtrar por nome"
          dataToChange="name"
          filterData={filterData}
          setData={setFilterData}
        />
      </FilterSection>
      <Main>
        {loading && <Loading spinnerSize={50} />}
        {data &&
          data.characters?.results?.map(character => (
            <Character
              avatar={character?.image}
              name={character?.name}
              key={Math.random()}
              origin={character?.origin?.name}
              location={character?.location?.name}
              epsodes={mapCharEpisodeResponse(character?.episode)}
            />
          ))}
      </Main>
      {error && <ErrorContainer error={error} content="Personagem" />}
    </Wrapper>
  );
};

export default CharactersContainer;
