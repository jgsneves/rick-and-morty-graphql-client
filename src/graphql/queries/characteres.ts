import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query Characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        pages
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
