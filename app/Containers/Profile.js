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
} from 'native-base';
import styles from './Styles/ProfileStyles';
import { connect } from 'react-redux';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  onBackPress = () => {
    this.props.navigation.goBack();
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

  render() {
    return (
      <Container style={styles.container}>{this.renderHeader()}</Container>
    );
  }
}

export default connect(
  null,
  null,
)(Profile);
