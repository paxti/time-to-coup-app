import { gql } from 'apollo-boost';

export const GET_SESSIONS = gql`
  query Query {
    sessions {
      name
    }
  }
`;

export const IS_SESSION_ACTIVE = gql`
  query isSessionActive {
    sessionActive @client
  }
`;
