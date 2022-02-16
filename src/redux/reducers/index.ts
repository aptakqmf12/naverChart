import { combineReducers } from "redux";

import { resReducer } from "./response";
import { reqReducer } from "./request";

export const rootReducer = combineReducers({ reqReducer, resReducer });
export type RootState = ReturnType<typeof rootReducer>;
