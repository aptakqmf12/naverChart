import axios, { AxiosResponse } from "axios";
import { getAPI } from "../../api";
import { put, call, takeLatest, all, takeEvery } from "redux-saga/effects";
import { REQ_TRIGGER, request } from "../reducers/request";
import { RES } from "../reducers/response";
import { ReducerActionType } from "../reducers/request";
import { Request, Response } from "../../types/types";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// 입력값을 서버로 POST보내서 응답값을 받은뒤 REQ에 payload로 응답값을 넘김
function* requestAction(action: ReducerActionType): Generator {
  try {
    //yield put({ type: RES, payload: action.payload }); //이게문제임
    const inputs: any = yield call(getAPI, action.payload); // Promise
    const responseArray = inputs.data.results[0].data; // 응답값 [{…}, {…}]
    // 응답온 값을 액션으로 넘김
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
