import { all, takeLatest } from 'redux-saga/effects';
import { login, register } from './AuthSaga';
import { search } from './HomeSaga';
import { AuthTypes } from '../Redux/AuthRedux';
import { HomeTypes } from '../Redux/HomeRedux';
import ApiJob from '../Services/JobApi';
import ApiLogin from '../Services/LoginApi';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, login, ApiLogin),
    takeLatest(AuthTypes.AUTH_REQUEST, register, ApiLogin),
    takeLatest(HomeTypes.SEARCH_REQUEST, search, ApiJob),
  ]);
}
