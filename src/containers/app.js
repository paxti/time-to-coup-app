import React from 'react';
import PropTypes from 'prop-types';
import ActiveSessionContainer from './ActiveSessionContainer';
import InactiveSessionContainer from './InactiveSessionContainer';

const App = ({ sessionActive = false }) => {
  return sessionActive ? <ActiveSessionContainer /> : <InactiveSessionContainer />;
};

App.propTypes = {
  sessionActive: PropTypes.bool
};

export default App;
