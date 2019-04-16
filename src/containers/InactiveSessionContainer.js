import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import CardsContainer from './CardsContainer';
import SessionContainer from './SessionContainer';
import LeaderboardContainer from './LeaderboardContainer';

const inactiveSessionContainer = createAppContainer(
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

export default inactiveSessionContainer;
