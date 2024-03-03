import reducer from "./Tasks/reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({ reducer: reducer });
