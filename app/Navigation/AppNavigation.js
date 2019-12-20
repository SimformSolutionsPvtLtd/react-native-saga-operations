import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Containers/Login';
import Home from '../Containers/Home';

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);
export default createAppContainer(AppNavigator);
