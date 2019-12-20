import { combineReducers } from 'redux';
import { testReducer } from './TestRedux';
import { authReducer } from './AuthRedux';
import { homeReducer } from './HomeRedux';

export default combineReducers({
  test: testReducer,
  auth: authReducer,
  home: homeReducer,
});
