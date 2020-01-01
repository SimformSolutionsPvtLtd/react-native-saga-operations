import { createActions, createReducer } from 'reduxsauce';
import { resettableReducer } from 'reduxsauce';

const initialState = {
  jobs: [],
  fetching: false,
  error: null,
};

export const { Types, Creators } = createActions({
  searchRequest: ['payload'],
  searchSuccess: ['payload'],
  searchFailure: ['payload'],
  debounceTest: ['payload'],
  throttleTest: ['payload'],
  reset: [null],
});

export default Creators;
export const HomeTypes = Types;
const resettable = resettableReducer(HomeTypes.RESET);

const searchRequest = state => {
  return { ...state, fetching: true, error: null };
};

const searchSuccess = (state, action) => {
  return { ...state, fetching: false, jobs: action.payload };
};

const searchFailure = (state, action) => {
  return { ...state, fetching: false, error: action.payload };
};

const handlers = {
  [Types.SEARCH_REQUEST]: searchRequest,
  [Types.SEARCH_SUCCESS]: searchSuccess,
  [Types.SEARCH_FAILURE]: searchFailure,
};

export const homeReducer = resettable(createReducer(initialState, handlers));
