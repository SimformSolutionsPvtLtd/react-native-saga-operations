import { all, takeLatest } from 'redux-saga/effects';
import { login, register } from './AuthSaga';
import { search } from './HomeSaga';
import { AuthTypes } from '../Redux/AuthRedux';
import { HomeTypes } from '../Redux/HomeRedux';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, login),
    takeLatest(AuthTypes.AUTH_REQUEST, register),
    takeLatest(HomeTypes.SEARCH_REQUEST, search),
  ]);
}
