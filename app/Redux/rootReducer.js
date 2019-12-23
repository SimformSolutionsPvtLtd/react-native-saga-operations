import { combineReducers } from 'redux';
import { testReducer } from './TestRedux';
import { authReducer } from './AuthRedux';
import { homeReducer } from './HomeRedux';
import navReducer from './NavigationRedux';

export default combineReducers({
  nav: navReducer,
  test: testReducer,
  auth: authReducer,
  home: homeReducer,
});
