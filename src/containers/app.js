import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import ActiveSessionContainer from './ActiveSessionContainer';
import InactiveSessionContainer from './InactiveSessionContainer';
import { IS_SESSION_ACTIVE } from '../graphql/queries';

const App = ({ sessionActive }) => {
  return sessionActive ? <ActiveSessionContainer /> : <InactiveSessionContainer />;
};

App.propTypes = {
  sessionActive: PropTypes.bool
};

export default graphql(IS_SESSION_ACTIVE, {
  props: ({ data: { sessionActive } }) => ({
    sessionActive
  })
})(App);
