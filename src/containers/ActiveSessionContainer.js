import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { graphql } from 'react-apollo';
import { END_ACTIVE_SESSION } from '../graphql/mutations';

const ActiveSession = ({ endActiveSession }) => {
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
      <TouchableOpacity onPress={endActiveSession}>
        <Text>End session</Text>
      </TouchableOpacity>
    </View>
  );
};

ActiveSession.propTypes = {
  endActiveSession: PropTypes.func.isRequired
};

export default graphql(END_ACTIVE_SESSION, { name: 'endActiveSession' })(ActiveSession);
