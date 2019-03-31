import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import CardsContainer from './CardsContainer';

const App = createBottomTabNavigator({
  Cards: {
    screen: CardsContainer
  }
});

export default createAppContainer(App);
