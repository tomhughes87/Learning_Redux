import reducer from "./Tasks/tasks";
import { configureStore } from "@reduxjs/toolkit";
import { log } from "../middleware/log";

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(log),
});
