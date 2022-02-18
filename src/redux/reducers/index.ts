import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { resReducer } from "./response";
import { reqReducer } from "./request";

const persistConfig = {
  key: "root",
  storage,
};

export const rootReducer = combineReducers({ reqReducer, resReducer });
export const persisted = persistReducer<any, any>(persistConfig, rootReducer);
//persisted의 타입은?
export type RootState = ReturnType<typeof rootReducer>;
