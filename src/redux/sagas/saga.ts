import { fork } from "child_process";
import { put, call, takeLatest, all } from "redux-saga/effects";
import { COUNT_START, COUNT_UP, countup } from "../reducers/reducer";

const delay = (ms: number): void => {};

function* count() {
  yield put(countup());
}

function* watchCount() {
  yield takeLatest(COUNT_UP, count);
}

export function* countSaga() {
  yield all([watchCount()]);
}
