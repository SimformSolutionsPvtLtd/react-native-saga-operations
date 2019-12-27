import React from 'react';
import { BackHandler, Platform } from 'react-native';
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import AppNavigation from './AppNavigation';
import { Root } from 'native-base';

createReactNavigationReduxMiddleware(state => state.nav);

const ReduxAppNavigator = createReduxContainer(AppNavigation);

class ReduxNavigation extends React.Component {
  componentDidMount() {
    if (Platform.OS === 'ios') {
      return;
    }
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = this.props;
      // change to whatever is your first screen, otherwise unpredictable results may occur
      if (
        nav.routes.length === 1 &&
        nav.routes[0].routeName === 'LaunchScreen'
      ) {
        return false;
      }
      // if (shouldCloseApp(nav)) return false
      dispatch({ type: 'Navigation/BACK' });
      return true;
    });
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') {
      return;
    }
    BackHandler.removeEventListener('hardwareBackPress', undefined);
  }

  render() {
    return (
      <Root>
        <ReduxAppNavigator
          dispatch={this.props.dispatch}
          state={this.props.nav}
        />
      </Root>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});
export default connect(mapStateToProps)(ReduxNavigation);
