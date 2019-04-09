import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import PropTypes from 'prop-types';
import CardsContainer from './CardsContainer';
import SessionContainer from './SessionContainer';
import LeaderboardContainer from './LeaderboardContainer';
import ActiveSessionContainer from './ActiveSessionContainer';

const InactiveSessionContainer = createAppContainer(
  createBottomTabNavigator({
    Cards: {
      screen: CardsContainer
    },
    Session: {
      screen: SessionContainer
    },
    Leaderboard: {
      screen: LeaderboardContainer
    }
  })
);

const App = ({ sessionActive = false }) => {
  return sessionActive ? <ActiveSessionContainer /> : <InactiveSessionContainer />;
};

App.propTypes = {
  sessionActive: PropTypes.bool
};

export default App;
