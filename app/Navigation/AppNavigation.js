import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Containers/Login';
import Home from '../Containers/Home';
import Register from '../Containers/Register';
import Profile from '../Containers/Profile';
import Splash from '../Containers/Splash';
import AllEffect from '../Containers/AllEffects';
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
    AllEffect: { screen: AllEffect },
    Login: { screen: Login },
    Register: { screen: Register },
    Home: { screen: Home },
  },
  { headerMode: 'none', initialRouteName: 'AllEffect' },
);

const PrimaryNav = createAnimatedSwitchNavigator(
  {
    onBoardStack,
    authStack,
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
