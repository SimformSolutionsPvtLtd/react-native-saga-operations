import { createActions, createReducer } from 'reduxsauce';
import { resettableReducer } from 'reduxsauce';

const initialState = {
  fetching: false,
  error: null,
  user: null,
};

export const { Types, Creators } = createActions({
  authRequest: ['payload', 'signin'],
  authSuccess: ['payload'],
  authFailure: ['payload'],
  registerSuccess: ['payload'],
  reset: [null],
});

export default Creators;
export const AuthTypes = Types;

const authRequest = state => {
  return { ...state, fetching: true, error: null };
};

const authSuccess = (state, action) => {
  return { ...state, fetching: false, user: action.payload };
};

const authFailure = (state, action) => {
  return { ...state, fetching: false, error: action.payload };
};

const handlers = {
  [Types.AUTH_REQUEST]: authRequest,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAILURE]: authFailure,
};

export const authReducer = createReducer(initialState, handlers);
