import { Reducer } from "redux";
import { Request, Age } from "../../types/types";

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

export const request = (payload: Request, ages: Age) => {
  return {
    type: REQ_TRIGGER,
    payload: payload,
    ages: ages,
  };
};

export const reqReducer: Reducer<any, ReducerActionType> = (
  state: Request = REQ_STATE,
  action: ReducerActionType
) => {
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
        ages: action.ages,
      };

    default:
      return state;
  }
};
