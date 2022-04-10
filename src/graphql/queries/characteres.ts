import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        next
      }
      results {
        name
        origin {
          name
        }
        location {
          name
        }
        image
        episode {
          name
        }
      }
    }
  }
`;

export default GET_CHARACTERS;
