import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from "./Tasks/reducer";

export const store = createStore(reducer);
