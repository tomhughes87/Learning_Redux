import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from "./Tasks/reducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
