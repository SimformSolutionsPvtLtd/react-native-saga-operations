import { all, takeLatest, call, takeEvery } from 'redux-saga/effects';
import { login, register, watchRequests } from './AuthSaga';
import { search } from './HomeSaga';
import { AuthTypes } from '../Redux/AuthRedux';
import { HomeTypes } from '../Redux/HomeRedux';
import { TestTypes } from '../Redux/TestRedux';
import ApiJob from '../Services/JobApi';
import ApiLogin from '../Services/LoginApi';
import { addQuestions, addQuestions1, flow } from './TestSaga';

export default function* rootSaga() {
  yield all([
    // takeEvery('*', watchLog),
    takeLatest(AuthTypes.AUTH_REQUEST, login, ApiLogin),
    // takeLatest(AuthTypes.AUTH_REQUEST, register, ApiLogin),
    takeLatest(HomeTypes.SEARCH_REQUEST, search, ApiJob),
    takeLatest(TestTypes.ADD_QUESTION, addQuestions),
    takeLatest(TestTypes.ADD_QUESTION, addQuestions1),
    takeLatest(TestTypes.START_APP, flow),
    // call(watchRequests, ApiLogin),
  ]);
}
