import { createActions, createReducer } from 'reduxsauce';

const initialState = {
  question: [],
  user: null,
  fetching: false,
  error: null,
  internetState: false,
};

export const { Types, Creators } = createActions({
  counterStart: [null],
  addInternetConnectivityListener: [null],
  internetConnectivityChange: ['payload'],
  addQuestion: ['question'],
  addQuestion1: ['question'],
  createUser: ['payload'],
  createUserSuccess: ['payload', 'userData'],
  createUserFailure: ['payload'],
  testAllEffect: [null],
});

export default Creators;
export const TestTypes = Types;

const add_question = (state, action) => {
  return { question: [...state.question, action.question] };
};

const add_question1 = (state, action) => {
  return { question: [...state.question, action.question] };
};

const createUserRequest = state => {
  return { ...state, fetching: true, error: null };
};

const createUserSuccess = (state, action) => {
  return { ...state, fetching: false, error: null, user: action.userData };
};

const createUserFailure = (state, action) => {
  return { ...state, fetching: false, error: action.payload };
};

const changeInternetStatus = (state, action) => {
  return { ...state, internetState: action.payload };
};

const handlers = {
  [Types.ADD_QUESTION]: add_question,
  [Types.ADD_QUESTION1]: add_question1,
  [Types.CREATE_USER]: createUserRequest,
  [Types.CREATE_USER_SUCCESS]: createUserSuccess,
  [Types.CREATE_USER_FAILURE]: createUserFailure,
  [Types.INTERNET_CONNECTIVITY_CHANGE]: changeInternetStatus,
};

export const testReducer = createReducer(initialState, handlers);
