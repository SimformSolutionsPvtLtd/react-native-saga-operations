import { createActions, createReducer } from 'reduxsauce';

const initialState = {
  question: [],
  user: null,
  fetching: false,
  error: null,
};

export const { Types, Creators } = createActions({
  addQuestion: ['question'],
  addQuestion1: ['question'],
  startApp: [],
  createUser: ['payload'],
  createUserSuccess: ['payload', 'userData'],
  createUserFailure: ['payload'],
});

export default Creators;
export const TestTypes = Types;

const add_question = (state, action) => {
  return { question: [...state.question, action.question] };
};

const add_question1 = (state, action) => {
  return { question: [...state.question, action.question] };
};

const startApp = state => {
  return { ...state };
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

const handlers = {
  [Types.ADD_QUESTION]: add_question,
  [Types.ADD_QUESTION1]: add_question1,
  [Types.START_APP]: startApp,
  [Types.CREATE_USER]: createUserRequest,
  [Types.CREATE_USER_SUCCESS]: createUserSuccess,
  [Types.CREATE_USER_FAILURE]: createUserFailure,
};

export const testReducer = createReducer(initialState, handlers);
