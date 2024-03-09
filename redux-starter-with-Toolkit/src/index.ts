import { compose, pipe } from "lodash/fp";
import { store } from "./store/store";
import {
  addTask,
  removeTask,
  completeTask,
  editTask,
} from "./store/Tasks/tasks";
import { TIMEOUT } from "dns";

console.log("The Redux Starter Project!!");

//////////////////
// Lodash and functions
//////////////////

const unsubscribe = store.subscribe(() => {
  const log = store.getState();
  console.log(log);
});

store.dispatch(addTask({ task: "Do 10k steps!" }));

store.dispatch(editTask({ id: "1", task: "Do 15k steps!" }));
