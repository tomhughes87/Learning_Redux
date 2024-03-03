import { ADD_TASK, REMOVE_TASK, TASK_COMPLETE } from "./actionTypes";
import { store } from "./store";

export function addTask(task: string, complete: boolean = false) {
  return {
    type: ADD_TASK,
    payload: { task, complete },
  };
}

export function removeTask(id: string) {
  return {
    type: REMOVE_TASK,
    payload: { id },
  };
}

export function taskComplete(id: string) {
  return {
    type: TASK_COMPLETE,
    payload: { id },
  };
}

export function getId(index: number) {
  return store.getState().tasks[index].id;
}
