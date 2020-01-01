import React from 'react';
import {
  Content,
  Button,
  Text,
  Item,
  Input,
  Toast,
  Container,
} from 'native-base';
import styles from './Styles/LoginStyles';
import { connect } from 'react-redux';
import Creators from '../Redux/AuthRedux';
import testCreators from '../Redux/TestRedux';
import { CustomHeader } from '../Components';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.count = 1;
    this.state = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.token) {
      this.props.navigation.navigate('tab');
    } else if (this.props.error) {
      Toast.show({ text: 'Wrong email or password', buttonText: 'Okay' });
    }
  }

  handleEmailChange = email => {
    this.setState({ email: email });
  };

  handlePasswordChange = password => {
    this.setState({ password: password });
  };

  onLoginPress = (takeLatest = false) => {
    const { email, password } = this.state;
    const { login, loginWithTakeEvery } = this.props;
    takeLatest
      ? login(email, password, this.count++)
      : loginWithTakeEvery(email, password, this.count++);
  };

  onAllPress = () => {
    const { attemptAllEffect } = this.props;
    attemptAllEffect();
  };

  renderHeader() {
    return <CustomHeader left title={'Take Latest & Take effect'} />;
  }

  renderDescTitle = () => {
    return (
      <Text style={styles.title}>
        Tap on Buttons multiple time, and see output into console log
      </Text>
    );
  };

  renderTextfields() {
    return (
      <>
        <Item>
          <Input
            placeholder="Username"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
          />
        </Item>
        <Item>
          <Input
            secureTextEntry
            placeholder="Password"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
          />
        </Item>
      </>
    );
  }

  renderButton() {
    return (
      <>
        <Button style={styles.button} onPress={() => this.onLoginPress(true)}>
          <Text>Login using TakeLatest effect</Text>
        </Button>
        <Button style={styles.button} onPress={() => this.onLoginPress()}>
          <Text>Login using TakeEvery effect</Text>
        </Button>
        <Button style={styles.button} onPress={this.onAllPress}>
          <Text>All</Text>
        </Button>
      </>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        {this.renderHeader()}
        <Content style={styles.innerContainer}>
          {this.renderDescTitle()}
          {this.renderTextfields()}
          {this.renderButton()}
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password, count) =>
    dispatch(Creators.authRequest({ email, password, count })),
  loginWithTakeEvery: (email, password, count) =>
    dispatch(Creators.authRequestTakeEvery({ email, password, count })),
  attemptAllEffect: () => dispatch(testCreators.testAllEffect()),
});

const mapStateToProps = state => ({
  token: state.auth.token,
  error: state.auth.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
