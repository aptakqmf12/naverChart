import { all } from "redux-saga/effects";
import { reqSaga } from "./request";

export function* rootSaga() {
  yield all([reqSaga()]);
}
