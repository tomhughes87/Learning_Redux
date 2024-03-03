import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from "./Tasks/reducer";
import { thunk } from "redux-thunk";
import { devToolsEnhancer } from "@redux-devtools/extension";

export const store = createStore(
  reducer,
  devToolsEnhancer({ trace: true })
  //   applyMiddleware(thunk)
);
