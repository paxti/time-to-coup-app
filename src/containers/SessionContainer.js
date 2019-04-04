import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';

const recentSessions = [
  {
    id: 1,
    name: '4/1/19'
  },
  {
    id: 2,
    name: '4/2/19'
  },
  {
    id: 3,
    name: '4/3/19'
  }
];

const RecentSession = ({ session }) => {
  const { id, name } = session;
  return (
    <View
      key={id}
      style={{
        flexDirection: 'row'
      }}
    >
      <Text>{`id: ${id}`}</Text>
      <Text>{`name: ${name}`}</Text>
    </View>
  );
};

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
      {recentSessions.map(session => RecentSession({ session }))}
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
    id: PropTypes.string.isRequired,
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
