import { all } from "redux-saga/effects";
import { countSaga } from "./saga";

export function* rootSaga() {
  yield all([countSaga()]);
}
