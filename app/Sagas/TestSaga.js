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
