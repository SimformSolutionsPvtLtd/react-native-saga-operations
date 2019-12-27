import { Body, Button, Container, Header, Icon, Input, Item, Left, ListItem, Right, Text, Title } from 'native-base';
import React from 'react';
import { FlatList, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { animatedGIF } from '../Animations';
import { Loader } from '../Components';
import todoCreators from '../Redux/TodoRedux';
import searchCreators from '../Redux/HomeRedux';
import styles from './Styles/TodoStyles';
import DialogInput from 'react-native-dialog-input';


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      isDialogVisible: false,
      searchText: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.props.fetchTodos()
  }

  showDialog(visible) {
    this.setState({ isDialogVisible: visible });
  }

  onSearchChange = text => {
    this.setState({ searchText: text });
    if (text.trim().length > 0) {
      this.props.attemptSearch(text.toLowerCase());
    } else {
      this.props.resetSearch();
    }
  };

  onAddPress = () => {
    this.showDialog(true);
  };

  sendInput(text) {
    if (text.trim() !== '') {
      const { todoList } = this.props;
      if (this.state.selectedItem) {
        //edit to do
        this.setState({ selectedItem: null });
      } else {
        this.props.addTodo(text)
      }
      this.showDialog(false);
    }
  }

  renderHeader() {
    return (
      <Header style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Left style={{ flex: 1 }} />
        <Body
          style={{
            flex: 1,
          }}>
          <Title style={{ alignSelf: 'center' }}>To Do</Title>
        </Body>
        <Right style={{ flex: 1 }}>
          <Button transparent onPress={this.onAddPress}>
            <Icon name="add" style={styles.right} />
          </Button>
        </Right>
      </Header>
    );
  }

  renderDialog() {
    const { selectedItem } = this.state;
    const modalStyle = { backgroundColor: '#00000080' }
    return (
      <DialogInput
        isDialogVisible={this.state.isDialogVisible}
        title={`${selectedItem ? 'Edit' : 'Add'} a Todo`}
        message={`${selectedItem ? 'Edit' : 'Enter'} todo description`}
        initValueTextInput={this.state.selectedItem?.title || ''}
        hintInput={'To do'}
        submitText={`${selectedItem ? 'Save' : 'Add'}`}
        modalStyle={styles.dialog}
        submitInput={inputText => {
          this.sendInput(inputText);
        }}
        modalStyle={modalStyle}
        closeDialog={() => {
          this.setState({ selectedItem: null }, () => this.showDialog(false));
        }}
      />
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
          <Text>{item.text}</Text>
        </Body>
      </ListItem>
    );
  };

  renderList() {
    const { todos, fetching } = this.props;
    return <FlatList data={todos} renderItem={this.renderItem} />;
  }

  render() {
    return (
      <>
        {this.renderHeader()}
        <Container style={styles.container}>
          {this.renderList()}
        </Container>
        {this.renderDialog()}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(todoCreators.getTodo()),
  addTodo: (todo) => dispatch(todoCreators.todoRequest(todo))
});

const mapStateToProps = state => ({
  todos: state.todo.todoList,
  fetching: state.todo.fetching,
  error: state.todo.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo);
