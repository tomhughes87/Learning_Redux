import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from "./Tasks/reducer";
import { thunk } from "redux-thunk";

export const store = createStore(reducer, applyMiddleware(thunk));
