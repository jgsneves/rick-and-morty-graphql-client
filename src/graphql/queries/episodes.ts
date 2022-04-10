import { gql } from '@apollo/client';

const GET_EPISODES = gql`
  query Episodes($page: Int) {
    episodes(page: $page) {
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
