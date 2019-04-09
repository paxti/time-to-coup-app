/**
 * Time to Coup
 * https://github.com/paxti/time-to-coup-app
 *
 * @format
 * @flow
 */

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Config from 'react-native-config';
import App from './containers/app';

const client = new ApolloClient({ uri: Config.API_URL });

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default Root;
