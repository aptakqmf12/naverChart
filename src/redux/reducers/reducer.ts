const INITIAL_STATE = {
  count: 20,
};

export const COUNT_START = "COUNT_START";
export const COUNT_UP = "COUNT_UP";

export const countup = () => {
  return {
    type: COUNT_UP,
  };
};

export function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case COUNT_UP:
      return {
        ...state,
        count: state.count + 1,
      };
  }
}
