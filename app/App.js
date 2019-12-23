import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from './Redux/store';
import RootContainer from './Containers/RootContainer';
import DebugConfig from './Config/DebugConfig';
import { PersistGate } from 'redux-persist/integration/react';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootContainer />
        </PersistGate>
      </Provider>
    );
  }
}

export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);
