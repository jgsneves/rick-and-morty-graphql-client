import { gql } from '@apollo/client';

const GET_EPISODES = gql`
  query Episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        pages
        next
      }
      results {
        name
        air_date
        characters {
          name
        }
      }
    }
  }
`;

export default GET_EPISODES;
