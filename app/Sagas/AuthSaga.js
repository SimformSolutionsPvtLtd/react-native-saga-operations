import { call, put, take } from 'redux-saga/effects';
import AuthActions, { AuthTypes } from '../Redux/AuthRedux';
function* handleResponse(response) {
  if (response.status === 200) {
    yield put(AuthActions.authSuccess(response.data.token));
  } else {
    yield put(AuthActions.authFailure(response.error));
  }
}

/**
 * Here we have a login functionality in which first register a user then automatically login and navigate to home screen
 *
 * It is wait for REGISTER_SUCCESS action dispatching then perform api call
 */
export function* login(api, action) {
  yield take(AuthTypes.REGISTER_SUCCESS);
  let response = yield call(api().login, {
    email: action.payload.email,
    password: action.payload.password,
  });
  console.log('getting response login:', response.data.token);
  yield* handleResponse(response);
}

/**
 *
 */
export function* register(api, action) {
  let response = yield call(api().register, {
    email: action.payload.email,
    password: action.payload.password,
  });
  console.log('getting response register:', response.error);
  if (response.status === 200) {
    yield put(AuthActions.registerSuccess(response.data.token));
  } else {
    yield put(AuthActions.authFailure(response.data.error));
  }
}
