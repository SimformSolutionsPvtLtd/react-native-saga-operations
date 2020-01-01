import { take, select, call, put, all, delay } from 'redux-saga/effects';
import Actions, { TestTypes } from '../Redux/TestRedux';
import { eventChannel, END } from 'redux-saga';
import NetInfo from '@react-native-community/netinfo';

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
  console.log('Start update user');
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
  console.log('Start create user');
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

function f1() {
  console.log('call function 1');
}
function f2() {
  console.log('call function 2');
}

/**
 * calling f1 and f2 function simultenuously using all effect
 */
export function* testAllEffect() {
  yield all([call(f1), call(f2)]);
}

function countdown(secs) {
  return eventChannel(emitter => {
    const iv = setInterval(() => {
      secs -= 1;
      if (secs > 0) {
        emitter(secs);
      } else {
        // this causes the channel to close
        emitter(END);
      }
    }, 1000);
    // The subscriber must return an unsubscribe function
    return () => {
      clearInterval(iv);
    };
  });
}

export function* counter() {
  // creates an event Channel from an interval of seconds
  const chan = yield call(countdown, 25);
  try {
    while (true) {
      // take(END) will cause the saga to terminate by jumping to the finally block
      let seconds = yield take(chan);
      console.log(`countdown: ${seconds}`);
    }
  } finally {
    console.log('countdown terminated');
  }
}

/**
 * Create one event channel and add extenal listener into event channel and subscribig it.
 * here external event listener is internet connectivity listener, once internet connectivity changes it automatically call listener and
 * return connection state
 * @returns internet connectivity state
 */
function startInternetListen() {
  return eventChannel(listener => {
    const removeListener = NetInfo.addEventListener(state => {
      listener(state.isConnected);
    });
    return removeListener;
  });
}

/**
 * Call startInternetListen function and buffer it, once internet connectivity change,
 * it dispatching internetConnectivityChange action
 */
export function* internetConnectivity() {
  const channel = yield call(startInternetListen);
  while (true) {
    const connectionInfo = yield take(channel);
    console.log('connectionInfo', connectionInfo);
    yield put(Actions.internetConnectivityChange(connectionInfo));
  }
}
