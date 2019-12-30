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
  registerRequest: ['payload'],
  registerSuccess: ['payload'],
  authRequestTakeEvery: ['payload'],
  callSimpleFunction: ['payload'],
  putEffectRequest: ['payload'],
  putEffectSuccess: ['payload'],
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

const putEffectTest = (state, action) => {
  console.log('put effect test', action.payload);
  return { ...state };
};

const handlers = {
  [Types.AUTH_REQUEST]: authRequest,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAILURE]: authFailure,
  [Types.REGISTER_REQUEST]: authRequest,
  [Types.REGISTER_SUCCESS]: registerSuccess,
  [Types.AUTH_REQUEST_TAKE_EVERY]: authRequest,
  [Types.CALL_SIMPLE_FUNCTION]: authRequest,
  [Types.PUT_EFFECT_REQUEST]: authRequest,
  [Types.PUT_EFFECT_SUCCESS]: putEffectTest,
};

export const authReducer = resettable(createReducer(initialState, handlers));
