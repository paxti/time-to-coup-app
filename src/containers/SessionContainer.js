import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { graphql, compose } from 'react-apollo';
import { GET_SESSIONS } from '../graphql/queries';
import { START_ACTIVE_SESSION } from '../graphql/mutations';

import RecentSessions from '../components/RecentSessions';

const Session = ({ startActiveSession, loading, error, sessions }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <TouchableOpacity onPress={startActiveSession}>
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
  startActiveSession: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

export default compose(
  graphql(START_ACTIVE_SESSION, { name: 'startActiveSession' }),
  graphql(GET_SESSIONS, {
    props: ({ data: { loading, sessions, error } }) => ({
      loading,
      sessions,
      error
    })
  })
)(Session);
