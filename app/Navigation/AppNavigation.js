import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Containers/Login';
import Home from '../Containers/Home';
import Profile from '../Containers/Profile';
import Splash from '../Containers/Splash';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

const onBoardStack = createStackNavigator(
  {
    Splash: { screen: Splash },
  },
  { headerMode: 'none' },
);

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

const PrimaryNav = createAnimatedSwitchNavigator(
  {
    onBoardStack,
    authStack,
    homeStack,
  },
  {
    initialRouteName: 'onBoardStack',
    transition: (
      <Transition.Sequence>
        <Transition.Out type="fade" durationMs={400} interpolation="easeIn" />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Sequence>
    ),
  },
);
export default createAppContainer(PrimaryNav);
