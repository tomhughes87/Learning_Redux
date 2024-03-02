import { v4 as uuidv4 } from "uuid";

interface Action {
  type: string;
  payload: State;
}

interface State {
  id: string;
  task: string;
  complete: boolean;
}

interface Props {
  state: State[];
  action: Action;
}

function reducer(props: Props) {
  const uniqueId = uuidv4();
  const { state, action } = props;
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: uniqueId,
          task: action.payload.task,
          complete: action.payload.complete,
        },
      ];
    case "Remove_TASK":
      return state.filter((thing) => thing.id !== action.payload.id);

      break;

    default:
      break;
  }
}
