import {gql} from '@apollo/client';

export const HOST = 'https://apollo.qtstage.io/graphql';


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
