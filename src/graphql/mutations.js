import { gql } from 'apollo-boost';

export const START_ACTIVE_SESSION = gql`
  mutation startActiveSession {
    startActiveSession @client {
      sessionActive
    }
  }
`;

export const END_ACTIVE_SESSION = gql`
  mutation endActiveSession {
    endActiveSession @client {
      sessionActive
    }
  }
`;
