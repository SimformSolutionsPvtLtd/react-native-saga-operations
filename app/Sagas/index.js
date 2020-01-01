import { all, takeLatest, takeEvery, call } from 'redux-saga/effects';
import {
  login,
  watchRequests,
  register,
  callSimpleFunction,
  putSample,
  getState,
} from './AuthSaga';
import { search } from './HomeSaga';
import { createUser, updateUser } from './TestSaga';
import { AuthTypes } from '../Redux/AuthRedux';
import { HomeTypes } from '../Redux/HomeRedux';
import { TestTypes } from '../Redux/TestRedux';
import ApiJob from '../Services/JobApi';
import ApiLogin from '../Services/LoginApi';
import ApiTest from '../Services/TestApi';
import {
  addQuestions,
  addQuestions1,
  counter,
  internetConnectivity,
  testAllEffect,
} from './TestSaga';

export default function* rootSaga() {
  yield all([
    // takeEvery('*', watchLog),
    takeLatest(AuthTypes.AUTH_REQUEST, login, ApiLogin),
    takeEvery(AuthTypes.AUTH_REQUEST_TAKE_EVERY, login, ApiLogin),
    takeEvery(AuthTypes.GET_STATE, getState),
    takeLatest(AuthTypes.REGISTER_REQUEST, register, ApiLogin),
    takeLatest(AuthTypes.CALL_SIMPLE_FUNCTION, callSimpleFunction),
    takeLatest(AuthTypes.PUT_EFFECT_REQUEST, putSample),
    takeLatest(HomeTypes.SEARCH_REQUEST, search, ApiJob),
    takeLatest(TestTypes.ADD_QUESTION, addQuestions),
    takeLatest(TestTypes.ADD_QUESTION, addQuestions1),
    takeLatest(TestTypes.CREATE_USER, createUser, ApiTest),
    takeLatest(TestTypes.CREATE_USER_SUCCESS, updateUser, ApiTest),
    takeLatest(TestTypes.COUNTER_START, counter),
    call(internetConnectivity),
    call(watchRequests, ApiLogin),
    takeLatest(TestTypes.TEST_ALL_EFFECT, testAllEffect),
  ]);
}
