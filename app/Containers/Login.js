import React from 'react';
import { Content, Button, Text, Item, Toast } from 'native-base';
import { View, StyleSheet } from 'react-native';
import styles from './Styles/LoginStyles';
import { connect } from 'react-redux';
import Creators from '../Redux/AuthRedux';
import CustomInput from '../Components/CustomInput';
import { strings } from '../Constants';
import { Loader } from '../Components';
import { animatedGIF } from '../Animations';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'brijesh25@gmail.com',
      password: 'brijesh',
    };
  }

  componentDidUpdate(prevProps) {
    const { user, error, navigation, fetching } = this.props;
    if (prevProps.fetching && !fetching) {
      if (user) {
        navigation.navigate('tab');
      } else if (error && !fetching) {
        Toast.show({ text: error, buttonText: 'Okay' });
      }
    }
  }

  handleEmailChange = email => {
    this.setState({ email: email });
  };

  handlePasswordChange = password => {
    this.setState({ password: password });
  };

  onLoginPress = () => {
    const { email, password } = this.state;
    const { login } = this.props;
    login(email, password, true);
  };

  onSignupPress = () => {
    const { email, password } = this.state;
    const { login } = this.props;
    login(email, password, false);
  };

  renderHeader() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Login</Text>
      </View>
    );
  }

  renderFields() {
    return (
      <>
        <Item>
          <CustomInput
            placeholder="Username"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
          />
        </Item>
        <Item>
          <CustomInput
            secureTextEntry
            placeholder="Password"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
          />
        </Item>
      </>
    );
  }

  renderForm() {
    return (
      <Content>
        {this.renderFields()}
        <Button rounded style={styles.button} onPress={this.onLoginPress}>
          <Text>{strings.loginWithEmail}</Text>
        </Button>
        <Text style={styles.signup} onPress={this.onSignupPress}>
          {strings.signupWithEmail}
        </Text>
      </Content>
    );
  }

  renderLoading() {
    if (this.props.fetching) {
      return (
        <View style={[StyleSheet.absoluteFill, styles.loader]}>
          <Loader source={animatedGIF.loading} />
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <>
        <Content style={styles.container}>
          {this.renderHeader()}
          {this.renderForm()}
        </Content>
        {this.renderLoading()}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password, signin) =>
    dispatch(Creators.authRequest({ email, password }, signin)),
});

const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.auth.error,
  fetching: state.auth.fetching,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
