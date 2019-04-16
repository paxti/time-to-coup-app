/**
 * Time to Coup
 * https://github.com/paxti/time-to-coup-app
 *
 * @format
 * @flow
 */

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';
import Config from 'react-native-config';
import gql from 'graphql-tag';
import App from './containers/app';

const cache = new InMemoryCache();
cache.writeData({
  data: {
    sessionActive: false
  }
});

const GET_CART_ITEMS = gql`
  query isSessionActive {
    sessionActive @client
  }
`;

const client = new ApolloClient({
  cache,
  uri: Config.API_URL,
  clientState: {
    defaults: {},
    resolvers: {
      Query: {
        isSessionActive() {
          return cache.readQuery({ query: GET_CART_ITEMS });
        }
      },
      Mutation: {
        startActiveSession() {
          client.writeData({ data: { sessionActive: true } });
        },
        endActiveSession() {
          client.writeData({ data: { sessionActive: false } });
        }
      }
    },
    typeDefs: ``
  }
});

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default Root;
