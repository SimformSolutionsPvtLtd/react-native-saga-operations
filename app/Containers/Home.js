import {
  Body,
  Container,
  Icon,
  Input,
  Item,
  ListItem,
  Text,
} from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { animatedGIF } from '../Animations';
import { CustomHeader, Loader } from '../Components';
import searchCreators from '../Redux/HomeRedux';
import styles from './Styles/HomeStyles';

const Searchbar = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCreators.searchRequest());
  }, [dispatch]);

  const onSearchChange = useCallback(
    text => {
      setSearchText(text);
      if (text.trim().length > 0) {
        dispatch(searchCreators.searchRequest(text.toLowerCase()));
      } else {
        dispatch(searchCreators.reset());
      }
    },
    [dispatch],
  );

  return (
    <Item>
      <Icon name="ios-search" />
      <Input
        placeholder="Search"
        onChangeText={onSearchChange}
        value={searchText}
      />
    </Item>
  );
};

const EmptyList = () => {
  const { fetching } = useSelector(state => state.home);
  if (!fetching) {
    return (
      <View style={styles.emptyList}>
        <Loader source={animatedGIF.emptyList} />
      </View>
    );
  }
  return null;
};

const renderItem = ({ item }) => {
  return (
    <ListItem>
      <Body>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.company}</Text>
      </Body>
    </ListItem>
  );
};

const SearchList = () => {
  const { jobs } = useSelector(state => state.home);
  if (jobs.length > 0) {
    return <FlatList data={jobs} renderItem={renderItem} />;
  } else {
    return <EmptyList />;
  }
};

const Home = () => {
  const { fetching } = useSelector(state => state.home);
  return (
    <>
      <CustomHeader left title={'Home'} />
      <Container style={styles.container}>
        <Searchbar />
        {fetching && (
          <Loader style={styles.loader} source={animatedGIF.loading} />
        )}
        <SearchList />
      </Container>
    </>
  );
};

export default Home;
