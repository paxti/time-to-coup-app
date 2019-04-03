/**
 * Time to Coup
 * https://github.com/paxti/time-to-coup-app
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import App from './containers/app';

const store = configureStore({
  sessionActive: false
});

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
