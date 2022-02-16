import { Request, RequestOptions } from "../../types/types";

export type ReducerActionType = ReturnType<typeof request>;

const REQ_STATE: Request = {
  startDate: "",
  endDate: "",
  category: "",
  keyword: "",
  timeUnit: "month",
  ages: [],
  device: "",
  gender: "",
};

export const REQ_TRIGGER = "REQ_TRIGGER" as const;

export const request = (payload: Request) => {
  return {
    type: REQ_TRIGGER,
    payload: payload,
  };
};

export function reqReducer(state = REQ_STATE, action: ReducerActionType) {
  switch (action.type) {
    case REQ_TRIGGER:
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        category: action.payload.category,
        keyword: action.payload.keyword,
        timeUnit: action.payload.timeUnit,
        device: action.payload.device,
        gender: action.payload.gender,
      };

    default:
      return state;
  }
}
