import {gql} from '@apollo/client';

export const HOME_CALL = gql`
  query Query {
    getHome {
      totalCount
      items {
        name
      }
    }
  }
`;
