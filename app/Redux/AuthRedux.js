import { createActions, createReducer } from 'reduxsauce';
import { resettableReducer } from 'reduxsauce';

const initialState = {
  token: null,
  fetching: false,
  error: null,
};

export const { Types, Creators } = createActions({
  authRequest: ['payload'],
  authSuccess: ['payload'],
  authFailure: ['payload'],
  registerSuccess: ['payload'],
  reset: [null],
});

export default Creators;
export const AuthTypes = Types;
const resettable = resettableReducer(AuthTypes.RESET);

const authRequest = state => {
  return { ...state, fetching: true, error: null };
};

const authSuccess = (state, action) => {
  return { ...state, fetching: false, token: action.payload };
};

const authFailure = (state, action) => {
  return { ...state, fetching: false, error: action.payload };
};

const registerSuccess = (state, action) => {
  return { ...state, fetching: false, token: action.payload };
};

const handlers = {
  [Types.AUTH_REQUEST]: authRequest,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAILURE]: authFailure,
  [Types.REGISTER_SUCCESS]: registerSuccess,
};

export const authReducer = resettable(createReducer(initialState, handlers));
