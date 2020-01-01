import { Button, Text } from 'native-base';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { CustomHeader } from '../Components';
import authCreators from '../Redux/AuthRedux';
import styles from './Styles/RegisterStyles';

const Register = () => {
  const dispatch = useDispatch();
  const email = 'eve.holt@reqres.in';
  const password = 'cityslicka';

  const onCallRegisterPress = useCallback(() => {
    dispatch(authCreators.registerRequest({ email, password }));
  }, [dispatch]);

  const onSimplePress = useCallback(() => {
    dispatch(authCreators.callSimpleFunction({ email, password }));
  }, [dispatch]);

  const onCallPress = useCallback(() => {
    dispatch(authCreators.putEffectRequest('put effect'));
  }, [dispatch]);

  const onSelectPress = useCallback(() => {
    dispatch(authCreators.getState());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <CustomHeader left title={'Call & Put'} />
      <Button style={styles.call} onPress={onCallRegisterPress}>
        <Text>Call Register api</Text>
      </Button>
      <Button style={styles.call} onPress={onSimplePress}>
        <Text>Call Simple function</Text>
      </Button>
      <Button style={styles.call} onPress={onCallPress}>
        <Text>Put</Text>
      </Button>
      <Button style={styles.call} onPress={onSelectPress}>
        <Text>Select</Text>
      </Button>
    </View>
  );
};

export default Register;
