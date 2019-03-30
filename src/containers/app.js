import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainContainer from './MainContainer';

const App = createStackNavigator({
  Home: {
    screen: MainContainer
  }
});

export default createAppContainer(App);
