import { gql } from 'apollo-boost';

// eslint-disable-next-line import/prefer-default-export
export const GET_SESSIONS = gql`
  query Query {
    sessions {
      name
    }
  }
`;
