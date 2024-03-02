import { store } from "./store";

export function addTask(task: string) {
  return {
    type: "ADD_TASK",
    payload: { task },
  };
}

export function removeTask(id: string) {
  return {
    type: "REMOVE_TASK",
    payload: { id },
  };
}

export function getId(index: number) {
  return store.getState().tasks[index].id;
}
