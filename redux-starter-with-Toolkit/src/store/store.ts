import reducer from "./Tasks/tasks";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({ reducer: reducer });
