// reducer.ts
import { v4 as uuidv4 } from "uuid";
import { ADD_TASK, REMOVE_TASK, TASK_COMPLETE, EDIT_TASK } from "./actionTypes";

// Define your Action types
interface Action {
  type: string;
  payload: any; // Can be detailed further based on actual payload structure
}

// Define the State shape
interface State {
  tasks: {
    id: string;
    task: string;
    complete: boolean;
  }[];
}

// Initial state with a tasks array
const initialState: State = {
  tasks: [],
};

// Reducer function matching Redux signature
export default function reducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: uuidv4(),
            task: action.payload.task,
            complete: action.payload.complete,
          },
        ],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };

    case TASK_COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, complete: true } : task
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, task: action.payload.task }
            : task
        ),
      };

    default:
      return state;
  }
}

// case "SHOW_TASK":
//     return {
//       ...state,
//       tasks: [
//         ...state.tasks,
//         {
//           id: uuidv4(),
//           task: action.payload.task,
//           complete: action.payload.complete,
//         },
//       ],
//     };
