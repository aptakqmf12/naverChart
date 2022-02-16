import { Response } from "../../types/types";

type ReducerActionType = ReturnType<typeof response>;

const RES_STATE: Response = {
  period: "",
  ratio: 0,
  group: null,
};

export const RES = "RES";
export const RES_TRIGGER = "RES_TRIGGER";

export const response = (payload: Response[]) => {
  return {
    type: RES,
    payload: payload,
  };
};

export function resReducer(state = RES_STATE, action: ReducerActionType) {
  switch (action.type) {
    case RES:
      return [...action.payload];

    default:
      return state;
  }
}
