import { useQuery } from '@apollo/client';
import React from 'react';
import Episode from '../../components/episode';
import Filter, { FilterEpisode } from '../../components/filter';
import Pagination from '../../components/pagination';
import { Episodes, EpisodesVariables } from '../../graphql/generated/Episodes';
import GET_EPISODES from '../../graphql/queries/episodes';
import mapEpisodeCharsResponse from '../../mappers/episodeCharsResponse';
import ErrorContainer from '../error';
import Loading from '../loading';
import { Main, Title, Wrapper, FilterSection } from './styles';

const EpisodesContainer: React.FC = () => {
  const [page, setPage] = React.useState<number>(1);

  const [filterData, setFilterData] = React.useState<FilterEpisode>({
    name: '',
  });

  const { data, loading, error } = useQuery<Episodes, EpisodesVariables>(
    GET_EPISODES,
    {
      variables: {
        page,
        filter: filterData,
      },
    },
  );
  return (
    <Wrapper>
      <Title>Episódios</Title>
      <Pagination
        page={page}
        pageAmount={data?.episodes?.info?.pages ?? 10}
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
        {data?.episodes?.results?.map(episode => (
          <Episode
            airDate={episode?.air_date}
            title={episode?.name}
            key={Math.random()}
            characters={mapEpisodeCharsResponse(episode?.characters)}
          />
        ))}
      </Main>
      {error && <ErrorContainer error={error} content="Episódio" />}
    </Wrapper>
  );
};

export default EpisodesContainer;
