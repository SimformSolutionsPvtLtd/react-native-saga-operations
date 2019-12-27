import { put } from 'redux-saga/effects';
import { insertTodo, fetchTodos } from '../Services/Firebase/Auth';
import TodoActions from '../Redux/TodoRedux';

export function* addTodo(action) {
  const todo = action.payload
  try {
    const response = yield insertTodo(todo)
    yield put(TodoActions.todoSuccess(response));
  } catch (error) {
    yield put(TodoActions.todoFailure(error));
  }
}

export function* getAllTodo() {
  try {
    const response = yield fetchTodos()
    yield put(TodoActions.todoSuccess(response));
  } catch (error) {
    yield put(TodoActions.todoFailure(error));
  }
}