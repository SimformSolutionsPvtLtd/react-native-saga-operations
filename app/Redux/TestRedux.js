import { createActions, createReducer } from 'reduxsauce';

const initialState = {
  question: [],
};

export const { Types, Creators } = createActions({
  addQuestion: ['question'],
});

export default Creators;
export const TestTypes = Types;

const add_question = (state, action) => {
  return { question: [...state.question, action.question] };
};

const handlers = {
  [Types.ADD_QUESTION]: add_question,
};

export const testReducer = createReducer(initialState, handlers);
