import AppNavigation from '../Navigation/AppNavigation';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

const reducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
};

export default createNavigationReducer(AppNavigation);
