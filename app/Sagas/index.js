import { all, takeLatest, takeEvery } from 'redux-saga/effects';
import { login, register, callSimpleFunction, putSample } from './AuthSaga';
import { search } from './HomeSaga';
import { createUser, updateUser } from './TestSaga';
import { AuthTypes } from '../Redux/AuthRedux';
import { HomeTypes } from '../Redux/HomeRedux';
import { TestTypes } from '../Redux/TestRedux';
import ApiJob from '../Services/JobApi';
import ApiLogin from '../Services/LoginApi';
import ApiTest from '../Services/TestApi';
import { addQuestions, addQuestions1, flow } from './TestSaga';

export default function* rootSaga() {
  yield all([
    // takeEvery('*', watchLog),
    takeLatest(AuthTypes.AUTH_REQUEST, login, ApiLogin),
    takeEvery(AuthTypes.AUTH_REQUEST_TAKE_EVERY, login, ApiLogin),
    takeLatest(AuthTypes.REGISTER_REQUEST, register, ApiLogin),
    takeLatest(AuthTypes.CALL_SIMPLE_FUNCTION, callSimpleFunction),
    takeLatest(AuthTypes.PUT_EFFECT_REQUEST, putSample),
    takeLatest(HomeTypes.SEARCH_REQUEST, search, ApiJob),
    takeLatest(TestTypes.ADD_QUESTION, addQuestions),
    takeLatest(TestTypes.ADD_QUESTION, addQuestions1),
    takeLatest(TestTypes.START_APP, flow),
    takeLatest(TestTypes.CREATE_USER, createUser, ApiTest),
    takeLatest(TestTypes.CREATE_USER_SUCCESS, updateUser, ApiTest),
    // call(watchRequests, ApiLogin),
  ]);
}
