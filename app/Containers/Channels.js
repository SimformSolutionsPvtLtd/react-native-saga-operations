import React from 'react';
import { CustomHeader } from '../Components';
import { Button, Text } from 'native-base';
import styles from './Styles/ChannelsStyles';
import { useDispatch, useSelector } from 'react-redux';
import testCreators from '../Redux/TestRedux';
import authCreators from '../Redux/AuthRedux';

const Buttons = () => {
  const dispatch = useDispatch();
  const email = 'eve.holt@reqres.in';
  const password = 'cityslicka';
  var count = 1;

  return (
    <>
      <Button
        style={styles.button}
        onPress={() => dispatch(testCreators.counterStart())}>
        <Text>Event Channel with counter</Text>
      </Button>
      <Button
        style={styles.button}
        onPress={() =>
          dispatch(
            authCreators.authRequestActionChannel({
              email,
              password,
              count: count++,
            }),
          )
        }>
        <Text>Action Channel</Text>
      </Button>
    </>
  );
};

const Channels = () => {
  const { internetState } = useSelector(state => state.test);
  return (
    <>
      <CustomHeader left title={'Channels'} />
      <Buttons />
      <Text
        style={
          styles.internet
        }>{`Get Internet Status using event channel: ${internetState}`}</Text>
    </>
  );
};

export default Channels;
