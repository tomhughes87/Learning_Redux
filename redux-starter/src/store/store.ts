import { legacy_createStore as createStore } from "redux";
import reducer from "./Tasks/reducer";

export const store = createStore(reducer);
