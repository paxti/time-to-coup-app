import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { graphql } from 'react-apollo';
import { GET_SESSIONS } from '../graphql/queries';

const RecentSession = ({ session }) => {
  const { name } = session;
  return <Text key={name}>{`name: ${name}`}</Text>;
};

const RecentSessions = ({ loading, error, sessions }) => {
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;
  return sessions.map(session => RecentSession({ session }));
};

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

RecentSession.propTypes = {
  session: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

Session.propTypes = {
  sessions: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
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
