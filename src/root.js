/**
 * Time to Coup
 * https://github.com/paxti/time-to-coup-app
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import configureStore from './store/configure-store';
import App from './containers/app';

const client = new ApolloClient({ uri: 'https://time-to-coup.appspot.com/graphql' });
const store = configureStore({
  sessionActive: false
});

const Root = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
);

export default Root;
