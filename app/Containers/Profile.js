import {
  Body,
  Button,
  Container,
  Header,
  Item,
  Left,
  Right,
  Text,
  Title,
  Content,
} from 'native-base';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CustomInput } from '../Components';
import testCreators from '../Redux/TestRedux';
import styles from './Styles/ProfileStyles';

const renderHeader = () => {
  return (
    <Header>
      <Left />
      <Body>
        <Title>Profile</Title>
      </Body>
      <Right />
    </Header>
  );
};

const renderBody = (setName, setJob) => {
  return (
    <>
      <Item>
        <CustomInput placeholder={'Name'} onChange={text => setName(text)} />
      </Item>
      <Item>
        <CustomInput placeholder={'Job'} onChange={text => setJob(text)} />
      </Item>
    </>
  );
};

const renderAddButton = addPress => {
  return (
    <Button style={styles.button} onPress={addPress}>
      <Text>Add</Text>
    </Button>
  );
};

const Profile = () => {
  const [job, setJob] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const addPress = useCallback(() => {
    if (job !== '' && name !== '') {
      dispatch(testCreators.createUser({ name, job }));
    }
  }, [dispatch, job, name]);

  return (
    <Container style={styles.container}>
      {renderHeader()}
      <Content>
        {renderBody(setName, setJob)}
        {renderAddButton(addPress)}
      </Content>
    </Container>
  );
};

export default Profile;
