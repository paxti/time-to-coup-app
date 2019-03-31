import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import CardsContainer from './CardsContainer';
import SessionContainer from './SessionContainer';
import LeaderboardContainer from './LeaderboardContainer';

const App = createBottomTabNavigator({
  Cards: {
    screen: CardsContainer
  },
  Session: {
    screen: SessionContainer
  },
  Leaderboard: {
    screen: LeaderboardContainer
  }
});

export default createAppContainer(App);
