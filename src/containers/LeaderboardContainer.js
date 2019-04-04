import React from 'react';
import { View, Text } from 'react-native';

const LeaderboardPresentation = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>Current Coup Rank</Text>
    </View>
  );
};

export default LeaderboardPresentation;
