import { takeLatest, delay, put } from 'redux-saga/effects';
import { ActionTypesApp } from './types';

export function* handleIncrement() {
  yield console.log('I increasing!!!');
  yield delay(2000);
  yield put({ type: ActionTypesApp.INCREASE });
}


export function* handleDecrement() {
  yield console.log('I decreasing!!!');
  yield delay(3000);
  yield put({ type: ActionTypesApp.DECREASE });
}
