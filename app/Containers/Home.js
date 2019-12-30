import {
  Body,
  Button,
  Container,
  Icon,
  Input,
  Item,
  ListItem,
  Right,
  Text,
} from 'native-base';
import React from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { Loader, CustomHeader } from '../Components';
import authCreators from '../Redux/AuthRedux';
import searchCreators from '../Redux/HomeRedux';
import { animatedGIF } from '../Animations';
import styles from './Styles/HomeStyles';
import { NavigationEvents } from 'react-navigation';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      loading: false,
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
    return <CustomHeader left title={'Home'} />;
  }

  renderSearchbar() {
    return (
      <Item>
        <Icon name="ios-search" />
        <Input
          placeholder="Search"
          onChangeText={this.onSearchChange}
          value={this.state.searchText}
        />
      </Item>
    );
  }

  renderEmptyList() {
    if (!this.props.fetching) {
      return (
        <View style={styles.emptyList}>
          <Loader source={animatedGIF.emptyList} />
        </View>
      );
    }
    return null;
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
    const { jobs, fetching } = this.props;
    console.tron.log(fetching);
    return <FlatList data={jobs} renderItem={this.renderItem} />;
  }

  renderActivity() {
    if (this.props.fetching) {
      return <Loader style={styles.loader} source={animatedGIF.loading} />;
    }
    return null;
  }

  render() {
    return (
      <>
        <NavigationEvents onDidFocus={() => this.props.attemptSearch()} />
        {this.renderHeader()}
        <Container style={styles.container}>
          {this.renderSearchbar()}
          {this.renderActivity()}
          {this.props?.jobs.length > 0
            ? this.renderList()
            : this.renderEmptyList()}
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  attemptSearch: filter => dispatch(searchCreators.searchRequest(filter)),
  resetSearch: () => dispatch(searchCreators.reset()),
  logout: () => dispatch(authCreators.reset()),
});

const mapStateToProps = state => ({
  jobs: state.home.jobs,
  fetching: state.home.fetching,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
