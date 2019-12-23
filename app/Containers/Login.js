import React from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  Form,
  Item,
  Input,
  Header,
  Body,
  Title,
  Toast,
} from 'native-base';
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
      this.props.navigation.navigate('Home');
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

  renderHeader() {
    return (
      <Header>
        <Body>
          <Title>Login</Title>
        </Body>
      </Header>
    );
  }

  renderForm() {
    return (
      <Content>
        <Form>
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
        </Form>
        <Button style={styles.button} onPress={() => this.onLoginPress(true)}>
          <Text>Register</Text>
        </Button>
        <Button style={styles.button} onPress={this.onLoginPress}>
          <Text>Login</Text>
        </Button>
      </Content>
    );
  }

  render() {
    return (
      <>
        {this.renderHeader()}
        <Container style={styles.container}>{this.renderForm()}</Container>
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
