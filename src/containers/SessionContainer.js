import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import { GET_SESSIONS } from '../graphql/queries';
import * as types from '../constants/ActionTypes';

const RecentSession = ({ session }) => {
  const { name } = session;
  return <Text key={name}>{`name: ${name}`}</Text>;
};

const RecentSessions = () => (
  <Query query={GET_SESSIONS}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :(</Text>;
      return data.sessions.map(session => RecentSession({ session }));
    }}
  </Query>
);

const SessionPresentation = ({ startSession }) => {
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
      <RecentSessions />
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    startSession: () => {
      dispatch({
        type: types.START_SESSION
      });
    }
  };
};

RecentSession.propTypes = {
  session: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
};

SessionPresentation.propTypes = {
  startSession: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(SessionPresentation);
