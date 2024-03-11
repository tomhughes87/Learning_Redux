import { compose, pipe } from "lodash/fp";
import { store } from "./store/store";
import {
  addTask,
  removeTask,
  completeTask,
  editTask,
  getCompletedTasks,
  // getCompletedTask,
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
store.dispatch(addTask({ task: "Go to Tesco", complete: true }));
store.dispatch(addTask({ task: "Apply for jobs" }));

// store.dispatch(getCompletedTask({})); //this deleted the filtered items

///////////////
///////////////
// Selectors:
const completedTasks = getCompletedTasks(store.getState());
console.log(completedTasks); // This will log out completed tasks
///////////////
///////////////

store.dispatch(addTask({ task: "Have a beer!" }));

///////////////
///////////////
// Middleware
