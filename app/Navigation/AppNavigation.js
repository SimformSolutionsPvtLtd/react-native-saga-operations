import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Containers/Login';
import Home from '../Containers/Home';
import Profile from '../Containers/Profile';

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },
    Profile: { screen: Profile },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);
export default createAppContainer(AppNavigator);
