import React from 'react';
import {
  Container,
  Header,
  Body,
  Title,
  Item,
  Icon,
  Input,
  Text,
  ListItem,
} from 'native-base';
import styles from './Styles/HomeStyles';
import { connect } from 'react-redux';
import Creators from '../Redux/HomeRedux';
import { FlatList, ActivityIndicator } from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  componentDidMount() {
    this.props.attemptSearch();
  }

  onSearchChange = text => {
    this.setState({ searchText: text });
    if (text.trim().length > 0) {
      this.props.attemptSearch(text.toLowerCase());
    } else {
      this.props.resetSearch();
    }
  };

  renderHeader() {
    return (
      <Header>
        <Body>
          <Title>Home</Title>
        </Body>
      </Header>
    );
  }

  renderSearchbar() {
    return (
      <>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            onChangeText={this.onSearchChange}
            value={this.state.searchText}
          />
        </Item>
      </>
    );
  }

  renderItem = ({ item }) => {
    return (
      <ListItem>
        <Body>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.company}</Text>
        </Body>
      </ListItem>
    );
  };

  renderList() {
    const { jobs } = this.props;
    return <FlatList data={jobs} renderItem={this.renderItem} />;
  }

  renderActivity() {
    if (this.props.fetching) {
      return <ActivityIndicator />;
    }
    return null;
  }

  render() {
    return (
      <Container style={styles.container}>
        {this.renderHeader()}
        {this.renderSearchbar()}
        {this.renderActivity()}
        {this.renderList()}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  attemptSearch: filter => dispatch(Creators.searchRequest(filter)),
  resetSearch: () => dispatch(Creators.searchReset()),
});

const mapStateToProps = state => ({
  jobs: state.home.jobs,
  fetching: state.home.fetching,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
