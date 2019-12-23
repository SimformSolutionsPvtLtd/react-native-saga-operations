import { createActions, createReducer } from 'reduxsauce';

const initialState = {
  question: [],
};

export const { Types, Creators } = createActions({
  addQuestion: ['question'],
  addQuestion1: ['question'],
  startApp: [],
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
const handlers = {
  [Types.ADD_QUESTION]: add_question,
  [Types.ADD_QUESTION1]: add_question1,
  [Types.START_APP]: startApp,
};

export const testReducer = createReducer(initialState, handlers);
