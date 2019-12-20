import { put } from 'redux-saga/effects';
import Creators from '../Redux/TestRedux';

export function* addQuestions(action) {
  console.log('action', action.question);
  //yield put(Creators.addQuestion(action.question));
}

export function* addQuestions1(action) {
  console.log('action', action.question);
  //yield put(Creators.addQuestion(action.question));
}
