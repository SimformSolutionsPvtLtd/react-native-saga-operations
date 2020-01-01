import { Button, Container, Icon, ListItem, Right } from 'native-base';
import React from 'react';
import { FlatList, Text } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { useDispatch } from 'react-redux';
import { CustomHeader } from '../Components';
import authCreator from '../Redux/AuthRedux';
import styles from './Styles/AllEffectStyles';

const onLogoutPress = (navigation, dispatch) => {
  dispatch(authCreator.reset());
  navigation.navigate('AllEffect');
};

const Header = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <CustomHeader
      title={'Saga Operations'}
      renderRight={
        <Right style={styles.right}>
          <Button
            transparent
            onPress={() => onLogoutPress(navigation, dispatch)}>
            <Icon type="FontAwesome" name="sign-out" style={styles.right} />
          </Button>
        </Right>
      }
    />
  );
};

const onListPress = (routeName = 'AllEffect', navigation, param) => {
  navigation.navigate(routeName, param);
};

const ListComponent = ({ item }) => {
  const navigation = useNavigation();
  const { routeName, param } = item;
  return (
    <ListItem onPress={() => onListPress(routeName, navigation, param)}>
      <Text>{item.title}</Text>
    </ListItem>
  );
};

const renderList = list => {
  return (
    <FlatList
      data={list}
      renderItem={item => <ListComponent {...item} />}
      keyExtractor={item => `${item.id}`}
    />
  );
};

const AllEffect = () => {
  const list = [
    { id: 1, title: 'TakeLatest & TakeEvery & All & Take', routeName: 'Login' },
    { id: 2, title: 'Call & Put & Select', routeName: 'Register' },
    { id: 3, title: 'Race & Fork & Cancel', routeName: 'Home' },
    { id: 4, title: 'Action channel & Event channel', routeName: 'Channels' },
    {
      id: 5,
      title: 'Throttle',
      routeName: 'Home',
      param: { type: 'throttle' },
    },
    {
      id: 6,
      title: 'Debounce',
      routeName: 'Home',
      param: { type: 'debounce' },
    },
  ];

  return (
    <Container style={styles.container}>
      <Header />
      {renderList(list)}
    </Container>
  );
};

export default AllEffect;
