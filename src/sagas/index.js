import { takeEvery, put, delay } from 'redux-saga/effects';
// const delay = (ms) => new Promise(res => setTimeout(res, ms))
// console.log(delay)
export function* incrementAsync() {
  yield put({type: 'SHOW_LOADING'});
  yield delay(1000);
  yield put({type: 'INCREMENT'});
  yield put({type: 'HIDE_LOADING'});
}

export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}