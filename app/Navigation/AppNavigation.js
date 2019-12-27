import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Containers/Login';
import Home from '../Containers/Home';
import Todo from '../Containers/Todo';
import Profile from '../Containers/Profile';
import Splash from '../Containers/Splash';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Transition } from 'react-native-reanimated';
import { Icon } from 'native-base';
import { Colors } from '../Theme';

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

const tabIcon = (label, icon) => {
  return {
    tabBarLabel: label,
    tabBarIcon: ({ tintColor }) => (
      <Icon name={icon} type="FontAwesome" size={30} />
    ),
  };
};

const tab = createBottomTabNavigator(
  {
    Todo: { screen: Todo, navigationOptions: tabIcon('Todo', 'list-ul') },
    Home: { screen: Home, navigationOptions: tabIcon('Home', 'home') },
    Profile: {
      screen: Profile,
      navigationOptions: tabIcon('Profile', 'user'),
    },
  },
  {
    headerMode: 'none',
    tabBarOptions: {
      activeTintColor: Colors.black,
      inactiveTintColor: Colors.grey,
    },
  },
);

const PrimaryNav = createAnimatedSwitchNavigator(
  {
    onBoardStack,
    authStack,
    tab,
  },
  {
    initialRouteName: 'onBoardStack',
    transition: (
      <Transition.Sequence>
        <Transition.Out type="fade" durationMs={200} interpolation="easeIn" />
        <Transition.In type="fade" durationMs={300} />
      </Transition.Sequence>
    ),
  },
);

export default createAppContainer(PrimaryNav);
