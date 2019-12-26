import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import ReduxNavigation from '../Navigation/ReduxNavigator';
import { NavigationActions } from 'react-navigation';

class RootContainer extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
    setTimeout(() => {
      let action = NavigationActions.navigate({ routeName: 'authStack' });
      if (this.props.token) {
        action = NavigationActions.navigate({ routeName: 'tab' });
      }
      this.props.dispatch(action);
    }, 100);
  }

  render() {
    return <ReduxNavigation />;
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
});
export default connect(mapStateToProps)(RootContainer);
