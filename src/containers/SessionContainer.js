import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { graphql } from 'react-apollo';
import { GET_SESSIONS } from '../graphql/queries';

import RecentSessions from '../components/RecentSessions';

const Session = ({ startSession, loading, error, sessions }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <TouchableOpacity onPress={startSession}>
        <Text>Host session</Text>
      </TouchableOpacity>
      <Text>Join session</Text>
      <Text>Recent sessions</Text>
      <RecentSessions loading={loading} error={error} sessions={sessions} />
    </View>
  );
};

Session.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ),
  startSession: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

export default graphql(GET_SESSIONS, {
  props: ({ data: { loading, sessions, error } }) => ({
    loading,
    sessions,
    error
  })
})(Session);
