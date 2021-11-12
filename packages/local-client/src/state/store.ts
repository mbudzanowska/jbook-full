import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistMiddleware } from "./middelwares/persist-middelware";
import reducers from "./reducers";

export const store = createStore(
  reducers,
  {},
  applyMiddleware(persistMiddleware, thunk)
);
