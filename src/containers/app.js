import { createStackNavigator, createAppContainer } from 'react-navigation';
import CardsContainer from './CardsContainer';

const App = createStackNavigator({
  Home: {
    screen: CardsContainer
  }
});

export default createAppContainer(App);
