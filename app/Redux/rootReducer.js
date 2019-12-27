import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';
import { testReducer } from './TestRedux';
import { authReducer, AuthTypes } from './AuthRedux';
import { homeReducer } from './HomeRedux';
import navReducer from './NavigationRedux';
import { todoReducer } from './TodoRedux';

const resettable = resettableReducer(AuthTypes.RESET);
export default combineReducers({
  nav: navReducer,
  test: testReducer,
  auth: resettable(authReducer),
  home: homeReducer,
  todo: resettable(todoReducer)
});
