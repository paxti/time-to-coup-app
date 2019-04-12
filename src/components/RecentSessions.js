import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import RecentSession from './RecentSession';

const RecentSessions = ({ loading, error, sessions }) => {
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;
  return sessions.map(session => RecentSession({ session }));
};

RecentSessions.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ),
  error: PropTypes.bool,
  loading: PropTypes.bool
};

export default RecentSessions;
