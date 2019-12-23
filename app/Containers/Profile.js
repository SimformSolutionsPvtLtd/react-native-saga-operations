import React from 'react';
import {
  Container,
  Header,
  Body,
  Title,
  Left,
  Button,
  Icon,
  Right,
  Text,
  Item,
} from 'native-base';
import styles from './Styles/ProfileStyles';
import { connect } from 'react-redux';
import Creators from '../Redux/TestRedux';
import { flow, subscribe } from '../Sagas/TestSaga';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  onBackPress = () => {
    this.props.navigation.goBack();
  };

  addPress = () => {
    this.props.addQuestion1('hi');
  };

  seePress = () => {
    // this.props.addQuestion1('hi');
    this.props.startApp();
  };

  startAppPress = () => {
    // this.props.startApp();
    flow();
  };

  renderHeader() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={this.onBackPress}>
            <Icon name="arrow-back" style={styles.back} />
          </Button>
        </Left>
        <Body>
          <Title>Profile</Title>
        </Body>
        <Right />
      </Header>
    );
  }

  renderBody() {
    return (
      <>
        <Button style={styles.button} onPress={this.addPress}>
          <Text>Add</Text>
        </Button>
        <Button style={styles.button} onPress={this.seePress}>
          <Text>See</Text>
        </Button>
        <Button style={styles.button} onPress={this.startAppPress}>
          <Text>Start App</Text>
        </Button>
      </>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        {this.renderHeader()}
        {this.renderBody()}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addQuestion: question => dispatch(Creators.addQuestion(question)),
  addQuestion1: () => dispatch(Creators.addQuestion1('hi')),
  startApp: () => dispatch(Creators.startApp()),
});

const mapStateToProps = state => ({
  questions: state.test.question,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
