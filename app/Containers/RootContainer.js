import React from 'react';
import ReduxNavigation from '../Navigation/ReduxNavigator';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class RootContainer extends React.Component {
  componentDidMount() {
    if (this.props.token) {
      this.props.dispatch(
        NavigationActions.navigate({ routeName: 'homeStack' }),
      );
    }
  }

  render() {
    return <ReduxNavigation />;
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
});
export default connect(mapStateToProps)(RootContainer);
