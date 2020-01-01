import React from 'react';
import { FlatList, Text } from 'react-native';
import styles from './Styles/AllEffectStyles';
import { Container, ListItem, Right, Button, Icon } from 'native-base';
import { useNavigation } from 'react-navigation-hooks';
import { CustomHeader } from '../Components';
import { useDispatch } from 'react-redux';
import authCreator from '../Redux/AuthRedux';

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

const onListPress = (routeName = 'AllEffect', navigation) => {
  navigation.navigate(routeName);
};

const ListComponent = ({ item }) => {
  const navigation = useNavigation();
  return (
    <ListItem onPress={() => onListPress(item.routeName, navigation)}>
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
    { id: 1, title: 'TakeLatest & TakeEvery & All', routeName: 'Login' },
    { id: 2, title: 'Call & Put & Select', routeName: 'Register' },
    { id: 3, title: 'Race & Fork & Cancel', routeName: 'Home' },
    { id: 4, title: 'Action channel & Event channel', routeName: 'Channels' },
  ];

  return (
    <Container style={styles.container}>
      <Header />
      {renderList(list)}
    </Container>
  );
};

export default AllEffect;
