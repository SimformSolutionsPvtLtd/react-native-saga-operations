import { call, put, race, take, fork, cancel } from 'redux-saga/effects';
import HomeActions, { HomeTypes } from '../Redux/HomeRedux';
/**
 * If action.payload coming blank then we dispatch searchReset action via put effect,
 * Call searchJob api via call effect and store response and dispatch searchSuccess or searchFailure effect
 *
 * @param {*} action action.payload is search text here
 */
function* searchProceed(action, api) {
  const response = yield call(api().searchJob, action.payload);
  if (response.status === 200) {
    yield put(HomeActions.searchSuccess(response.data));
  } else {
    yield put(HomeActions.searchFailure(response.error));
  }
}

/**
 * fork effect - it will call searchProcess function and wait for SEARCH_RESET action dispatch using take effect
 * and cancel forked task using cancel effect.
 *
 * When user enter text for searching, the searchProceed function call into background thread becuase we are using fork effect
 * then wait for SEARCH_RESET action dispatch because we are using take effect
 *
 * when searchProceed function is envoking and action.payload is blank then we dispatch searchReset action, it automatically call cancel effect
 * beacuse it was waiting for SEARCH_RESET action
 */
export function* search1(api, action) {
  const searching = yield fork(searchProceed, action, api);
  yield take(HomeTypes.RESET);
  yield cancel(searching);
}

/**
 * We can achieve above functionality using race effect,
 * Here we added two effect into race call and take, once a searchReset action dispatch it automatically cancel api call effect
 *
 * @param {*} action
 */
export function* search2(api, action) {
  const { response } = yield race({
    response: call(api().searchJob, action.payload),
    reset: take(HomeTypes.RESET),
  });
  if (response) {
    if (response.status === 200) {
      yield put(HomeActions.searchSuccess(response.data));
    } else {
      yield put(HomeActions.searchFailure(response.error));
    }
  }
}

/**
 * We can achieve above functionality using race effect but calling another generator functions(searchProceeds)
 * @param {*} action
 */
export function* search(api, action) {
  const { timeOut } = yield race({
    response: call(searchProceed, action, api),
    cancel: take(HomeTypes.RESET),
  });
  if (timeOut) {
    yield put(HomeActions.reset());
  }
}
