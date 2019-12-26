import React from 'react';
import { Content, Button, Text, Item, Input, Toast } from 'native-base';
import { View } from 'react-native';
import styles from './Styles/LoginStyles';
import { connect } from 'react-redux';
import Creators from '../Redux/AuthRedux';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.token) {
      this.props.navigation.navigate('tab');
    } else if (this.props.error) {
      Toast.show({ text: 'Wrong emai or password', buttonText: 'Okay' });
    }
  }

  handleEmailChange = email => {
    this.setState({ email: email });
  };

  handlePasswordChange = password => {
    this.setState({ password: password });
  };

  onLoginPress = (isRegister = false) => {
    const { email, password } = this.state;
    const { login } = this.props;
    isRegister ? login(email, password) : login(email, password);
  };

  onSignupPress = () => {
    alert('In Progress');
  };
  renderHeader() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Login</Text>
      </View>
    );
  }

  renderForm() {
    return (
      <Content>
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

        <Button style={styles.button} onPress={this.onLoginPress}>
          <Text>Login</Text>
        </Button>
        <Text style={styles.signup} onPress={this.onSignupPress}>
          Don't have an account?
        </Text>
      </Content>
    );
  }

  render() {
    return (
      <>
        <Content style={styles.container}>
          {this.renderHeader()}
          {this.renderForm()}
        </Content>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) =>
    dispatch(Creators.authRequest({ email, password })),
});

const mapStateToProps = state => ({
  token: state.auth.token,
  error: state.auth.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
