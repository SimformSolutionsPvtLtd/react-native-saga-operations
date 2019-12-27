import { createActions, createReducer } from 'reduxsauce';

const initialState = {
  todoList: [],
  fetching: false,
  error: null,
};

export const { Types, Creators } = createActions({
  todoRequest: ['payload'],
  todoSuccess: ['payload'],
  todoFailure: ['payload'],
  getTodo: [null]
});

export default Creators;
export const TodoTypes = Types;

const todoRequest = state => {
  return { ...state, fetching: true, error: null };
};

const todoSuccess = (state, action) => {
  const payload = Array.isArray(action.payload) ? action.payload : [action.payload]
  return { ...state, fetching: false, todoList: [...state.todoList, ...payload] };
};

const todoFailure = (state, action) => {
  return { ...state, fetching: false, error: action.payload };
};



const handlers = {
  [Types.TODO_REQUEST]: todoRequest,
  [Types.TODO_SUCCESS]: todoSuccess,
  [Types.TODO_FAILURE]: todoFailure,
  [Types.GET_TODO]: todoRequest,
};

export const todoReducer = createReducer(initialState, handlers);
