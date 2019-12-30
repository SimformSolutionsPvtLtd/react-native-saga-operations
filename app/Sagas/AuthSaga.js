import {
  call,
  put,
  take,
  actionChannel,
  eventChannel,
} from 'redux-saga/effects';
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
  // yield take(AuthTypes.REGISTER_SUCCESS);
  console.log('request login');
  let response = yield call(api().login, {
    email: action.payload.email,
    password: action.payload.password,
  });
  console.log('getting response login:', response.data.token);
  yield* handleResponse(response);
}

/**
 *
 * @param {*} api api function for calling api
 * @param {*} action contains email and password
 */
export function* register(api, action) {
  console.log('request register');
  let response = yield call(api().register, {
    email: action.payload.email,
    password: action.payload.password,
  });
  console.log('getting response register:', response.data);
  if (response.status === 200) {
    yield put(AuthActions.registerSuccess(response.data.token));
  } else {
    yield put(AuthActions.authFailure(response.error));
  }
}

/**
 * simple log of argument for understanding
 * @param {*} email
 */
function anotherFunction(email) {
  console.log('anotherFunction with paramter email:', email);
}

/**
 * function that calling anotherfunction using call effect
 * @param {*} action it contain email and password
 */
export function* callSimpleFunction(action) {
  console.log('call simple function before');
  yield call(anotherFunction, action.payload.email);
}

export function* putSample(action) {
  console.log('call putSample request');
  yield put(AuthActions.putEffectSuccess('from auth saga to auth redux'));
}

/**
 * Here in this function we're created one channel(listen channel) with AUTH_REQUEST pattern and register it.
 * once AUTH_REQUEST action dispatched it automatically execute block of after take effect(call of login api).
 * @param {*} api api url from watcher function
 */
export function* watchRequests(api) {
  const requestChannel = yield actionChannel(AuthTypes.AUTH_REQUEST);
  while (true) {
    const action = yield take(requestChannel);
    yield call(login, api, action);
  }
}
