import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const LeaderboardPresentation = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Current Coup Rank</Text>
    </View>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

LeaderboardPresentation.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaderboardPresentation);
