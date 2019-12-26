import { take, select, call, fork, put } from 'redux-saga/effects';
import Actions, { TestTypes } from '../Redux/TestRedux';

export function* watchLog(action) {
  console.log('dispatched action', action);
  const testState = yield select(state => state.test);
  console.log('Test state', testState);
}

export function* addQuestions(action) {
  console.log('action before', action.question);
  yield take(TestTypes.ADD_QUESTION1);
  console.log('action after', action.question);
  //yield put(Creators.addQuestion(action.question));
}

export function* addQuestions1(action) {
  console.log('action addQuestions1', action.question);
  //yield put(Creators.addQuestion(action.question));
}

export function* updateUser(api, action) {
  const response = yield call(
    api().updateUser,
    action.payload,
    action.userData,
  );
  if (response.status === 201) {
    yield put(Actions.createUserSuccess(response.data));
  } else {
    yield put(Actions.createUserFailure(response.error));
  }
}

export function* createUser(api, action) {
  const response = yield call(api().createUser, {
    name: action.name,
    job: action.job,
  });
  if (response.status === 201) {
    yield put(Actions.createUserSuccess(response.data.id, action.payload));
  } else {
    yield put(Actions.createUserFailure(response.error));
  }
}

export function* connect() {
  console.log('connect');
  return { socket: 'socket' };
}

export function* subscribe(socket) {
  console.log('subscribe', socket);
  return unsubscribe;
}

export function* unsubscribe(socket) {
  console.log('unsubscribe', socket);
}

export function* read(socket) {
  console.log('read');
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}
export function* flow() {
  yield take(TestTypes.START_APP);
  const socket = yield call(connect);
  yield fork(read, socket);
}
