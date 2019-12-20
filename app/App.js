import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import RootContainer from './Containers/RootContainer';
import DebugConfig from './Config/DebugConfig';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);
