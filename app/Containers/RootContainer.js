import React from 'react';
import { Root } from 'native-base';
import AppNavigation from '../Navigation/AppNavigation';

class RootContainer extends React.Component {
  render() {
    return (
      <Root>
        <AppNavigation />
      </Root>
    );
  }
}
export default RootContainer;
