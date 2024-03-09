import { ADD_TASK, EDIT_TASK, REMOVE_TASK, TASK_COMPLETE } from "./actionTypes";
import { store } from "../store";

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

export function editTask(id: string, task: string) {
  return {
    type: EDIT_TASK,
    payload: { id, task },
  };
}

export function getId(index: number) {
  return store.getState().tasks[index].id;
}

export const fetchTodoTask = () =>
  async function () {
    const response: any = await fetch(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    const newTask = await response.json();
    const numberOfItems = newTask.length;
    const randomNum = Math.random();
    const randomIndex = Math.floor(randomNum * numberOfItems);
    const randomlySelectedTask: string = newTask[randomIndex].title;
    store.dispatch(addTask(randomlySelectedTask));
  };
