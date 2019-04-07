import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
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

const AppPresentation = ({ sessionActive }) => {
  return sessionActive ? <ActiveSessionContainer /> : <InactiveSessionContainer />;
};

AppPresentation.propTypes = {
  sessionActive: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { sessionActive } = state;
  return {
    sessionActive
  };
};

export default connect(
  mapStateToProps,
  null
)(AppPresentation);
