import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';

const SessionPresentation = ({ startSession }) => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <TouchableOpacity onPress={startSession}>
        <Text>Host session</Text>
      </TouchableOpacity>
      <Text>Join session</Text>
    </View>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    startSession: () => {
      dispatch({
        type: types.START_SESSION
      });
    }
  };
};

SessionPresentation.propTypes = {
  startSession: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(SessionPresentation);
