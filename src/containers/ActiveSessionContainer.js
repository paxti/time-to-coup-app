import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

const ActiveSession = ({ endSession = () => {} }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>Active session</Text>
      <TouchableOpacity onPress={endSession}>
        <Text>End session</Text>
      </TouchableOpacity>
    </View>
  );
};

ActiveSession.propTypes = {
  endSession: PropTypes.func.isRequired
};

export default ActiveSession;
