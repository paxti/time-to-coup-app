import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';

const ActiveSessionPresentation = ({ endSession }) => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Active session</Text>
      <TouchableOpacity onPress={endSession}>
        <Text>End session</Text>
        </TouchableOpacity>
    </View>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    endSession: () => {
      dispatch({
        type: types.END_SESSION
      });
    }
  };
};

ActiveSessionPresentation.propTypes = {
  endSession: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(ActiveSessionPresentation);
