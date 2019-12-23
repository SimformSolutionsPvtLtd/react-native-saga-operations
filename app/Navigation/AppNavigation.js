import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Containers/Login';
import Home from '../Containers/Home';
import Profile from '../Containers/Profile';

const authStack = createStackNavigator(
  {
    Login: { screen: Login },
  },
  { headerMode: 'none' },
);

const homeStack = createStackNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile },
  },
  { headerMode: 'none' },
);

const PrimaryNav = createSwitchNavigator(
  {
    authStack,
    homeStack,
  },
  {
    initialRouteName: 'authStack',
  },
);
export default createAppContainer(PrimaryNav);
