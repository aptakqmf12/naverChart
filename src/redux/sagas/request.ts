import { getAPI } from "../../api";
import { put, call, all, takeEvery } from "redux-saga/effects";
import { REQ_TRIGGER } from "../reducers/request";
import { RES } from "../reducers/response";
import { ReducerActionType } from "../reducers/request";
import { Age } from "../../types/types";

function* requestAction(action: ReducerActionType): Generator {
  try {
    const mergedPayload = {
      ...action.payload,
      ages: action.ages,
    };
    const inputs: any = yield call(getAPI, mergedPayload);
    const responseArray = inputs.data.results[0].data; // 응답값 [{…}, {…}]
    yield put({ type: RES, payload: responseArray });
  } catch (err) {
    console.log("값을 제대로 입력해주세요", err);
  }
}

function* watchRequst() {
  yield takeEvery(REQ_TRIGGER, requestAction);
}

export function* reqSaga() {
  yield all([watchRequst()]);
}
