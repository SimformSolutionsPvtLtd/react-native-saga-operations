import { Button, Container, Content, Item, Text } from 'native-base';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CustomHeader, CustomInput } from '../Components';
import Creators from '../Redux/AuthRedux';
import testCreators from '../Redux/TestRedux';
import styles from './Styles/LoginStyles';

const DescTitle = () => {
  return (
    <Text style={styles.title}>
      Tap on Buttons multiple time, and see output into console log
    </Text>
  );
};

const useLoginForm = () => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const dispatch = useDispatch();

  const handleEmailChange = useCallback(
    text => {
      setEmail(text);
      dispatch(Creators.throttleTest(text));
    },
    [dispatch],
  );

  const handlePasswordChange = useCallback(
    text => {
      setPassword(text);
    },
    [setPassword],
  );
  return { email, password, handleEmailChange, handlePasswordChange };
};

const useButtons = (email, password) => {
  const dispatch = useDispatch();
  var count = 1;
  const requestParam = { email, password, count: count++ };
  const onLoginPress = (takeLatest = false) => {
    takeLatest
      ? dispatch(Creators.authRequest(requestParam))
      : dispatch(Creators.authRequestTakeEvery(requestParam));
  };

  const onAllPress = () => {
    dispatch(testCreators.testAllEffect());
  };

  const onTakePress = () => {
    dispatch(Creators.authRequestWithResource(requestParam));
  };

  const onDebouncePress = () => {
    dispatch(Creators.throttleTest());
  };

  return { onLoginPress, onAllPress, onTakePress, onDebouncePress };
};

const Buttons = ({ email, password }) => {
  const { onLoginPress, onAllPress, onTakePress, onDebouncePress } = useButtons(
    email,
    password,
  );
  return (
    <>
      <Button style={styles.button} onPress={() => onLoginPress(true)}>
        <Text>Login using TakeLatest effect</Text>
      </Button>
      <Button style={styles.button} onPress={onLoginPress}>
        <Text>Login using TakeEvery effect</Text>
      </Button>
      <Button style={styles.button} onPress={onAllPress}>
        <Text>All</Text>
      </Button>
      <Button style={styles.button} onPress={onTakePress}>
        <Text>Take</Text>
      </Button>
      <Button style={styles.button} onPress={onDebouncePress}>
        <Text>Debounce</Text>
      </Button>
    </>
  );
};

const TextFields = () => {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
  } = useLoginForm();
  return (
    <>
      <Item>
        <CustomInput
          placeholder="Username"
          value={email}
          onChange={handleEmailChange}
        />
      </Item>
      <Item>
        <CustomInput
          secureTextEntry
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Item>
      <Buttons email={email} password={password} />
    </>
  );
};

const Login = () => {
  // const { fetching, error, token } = useSelector(state => state.auth);
  // const prevFetching = usePrevious(fetching);
  // const navigation = useNavigation();
  // useEffect(() => {
  //   if (token && !fetching) {
  //     navigation.navigate('AllEffect');
  //   } else if (prevFetching && !fetching) {
  //     Toast.show({ text: 'Wrong email or password', buttonText: 'Okay' });
  //   }
  // }, [token, error, navigation, fetching, prevFetching]);

  return (
    <Container style={styles.container}>
      <CustomHeader left title={'Take Latest & Take effect'} />
      <Content style={styles.innerContainer}>
        <DescTitle />
        <TextFields />
      </Content>
    </Container>
  );
};

export default Login;
