import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import { rootReducer, persisted } from "./reducers";
import { rootSaga } from "../redux/sagas";

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  persisted,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);
sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);
