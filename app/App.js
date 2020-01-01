import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import store, { persistor } from './Redux/store';
import RootContainer from './Containers/RootContainer';
import { Root } from 'native-base';
import DebugConfig from './Config/DebugConfig';
import { PersistGate } from 'redux-persist/integration/react';

class App extends React.Component {
  render() {
    const containerStyle = { flex: 1, backgroundColor: '#00000060' };
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={containerStyle}>
            <Root>
              <RootContainer />
            </Root>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);
