import { createActions, createReducer } from 'reduxsauce';

const initialState = {
  jobs: [],
  fetching: false,
  error: null,
};

export const { Types, Creators } = createActions({
  searchRequest: ['payload'],
  searchSuccess: ['payload'],
  searchFailure: ['payload'],
  searchReset: [null],
});

export default Creators;
export const HomeTypes = Types;

const searchRequest = state => {
  return { ...state, fetching: true, error: null };
};

const searchSuccess = (state, action) => {
  return { ...state, fetching: false, jobs: action.payload };
};

const searchFailure = (state, action) => {
  return { ...state, fetching: false, error: action.payload };
};

const searchReset = (state, action) => {
  return initialState;
};

const handlers = {
  [Types.SEARCH_REQUEST]: searchRequest,
  [Types.SEARCH_SUCCESS]: searchSuccess,
  [Types.SEARCH_FAILURE]: searchFailure,
  [Types.SEARCH_RESET]: searchReset,
};

export const homeReducer = createReducer(initialState, handlers);
