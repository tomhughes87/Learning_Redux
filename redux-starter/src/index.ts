import { compose, pipe } from "lodash/fp";
import { store } from "./store/store";
import {
  addTask,
  editTask,
  fetchTodoTask,
  getId,
  removeTask,
  taskComplete,
} from "./store/Tasks/actions";
import { TIMEOUT } from "dns";

console.log("The Redux Starter Project!!");

//////////////////
// Lodash and functions
//////////////////
let user = "   Tom  ";

const trim = (name: string) => name.trim();
const message = (trimmedName: string) => `Hi there ${trimmedName}!`;
const pipeMessage = (mainMessage: string) =>
  `${mainMessage} Generated with pipe lodash`;
const printMessage = (fullMessage: string) => console.log(fullMessage);

const newComposeFuncLodash: (name: string) => void = compose(
  printMessage,
  message,
  trim
);
newComposeFuncLodash(user);

const newPipeFuncLodash: (name: string) => void = pipe(
  trim,
  message,
  pipeMessage,
  printMessage
);
newPipeFuncLodash(user);

//////////////////
// Currying
//////////////////

const userMachineLoadingStatus: string = "      Loading    ";
const userMachineName: string = "     Dell j43   ";

const trimText = (text: string) => text.trim();
const midMessage = (machineName: string) => (loadingState: string) =>
  `${machineName}'s current state is: ${loadingState}`;
const print = (completedMessage: string) => console.log(completedMessage);

const loadingMessageLodash = compose(
  print,
  midMessage(userMachineName),
  trimText
);

loadingMessageLodash(userMachineLoadingStatus);

//////////////////
// Currying by Chris P
//////////////////

let outputColor: string = "background: #222; color: #bada55; font-size: 20px";
let chrisUsername: string = "        Chris   ";
let chrisMessage: string = "Good Afternoon";

const chrisTrim = (name: string) => name.trim();
const generateMessage = (message: string) => (name: string) =>
  `Hello ${name}, ${message}!`;
const convertToUpper = (name: string) => name.toUpperCase();

let outputFunction = pipe(
  chrisTrim,
  generateMessage(chrisMessage),
  convertToUpper
);

outputFunction(chrisUsername);

//////
// advanced
//////
const output = (outputText: string) =>
  console.log(`%c ${outputText}`, outputColor);

output(outputFunction(chrisUsername));

//////////////////

console.log("%chi!", outputColor);

//////////////////
//////////////////

//// PURE FUNCTIONS:
function pureFunction(aNumber: number) {
  return aNumber * 2;
}

//// IMPURE FUNCTIONS:
function impureFunction() {
  return Math.random() * 100;
}
console.log(
  "this is a pure functions, it returns the same every time",
  pureFunction(4)
);
console.log(
  "this is an impure functions, it returns differently each time",
  impureFunction()
);

//////////////////
//////////////////
// challenge
//////////////////
//////////////////

let game: any = {
  publisher: "activision",
  platforms: ["xbox", "pc", "ps5"],
  gameDetails: {
    name: "Call of Duty: Modern Warfare",
    price: 69.99,
    genre: "FPS",
  },
};

///////////////
// Version 1

console.log(game);
game.publisher = "Nintendo"; //
console.log(game);
///////////////
//Version 2

const game2 = [
  game,
  {
    publisher: "Sega",
    platforms: ["ps5"],
    gameDetails: {
      name: "Sonic",
      price: 29.99,
      genre: "Adventure",
    },
  },
];
console.log(game2);

///////////////
//Version 3 // basic update- updates in memory
game.gameDetails.price = 0.99;

///////////////
//Version 4

const game3 = {
  ...game,
  platforms: ["pc-only"],
};
console.log(game3);

///////////////
//Version 5

const game4 = {
  ...game,
  gameDetails: { ...game.gameDetails, price: 99 },
};
console.log(game4);

///////////////
//Version 6
//-this updates the same value in memory! despite us never changing "game",
//updating "game5" has changed "game" because they are looking at the same memory block

const game5 = game;
game5.gameDetails.price = 69.69;

console.log("game", game);
console.log("game5", game5);

//////////////
//ARRAY

const arrayOfGames = ["game1", "game2", "game3"];

console.log(...arrayOfGames, "game4");
console.log("game 0", ...arrayOfGames);
const index = arrayOfGames.indexOf("game 2");
console.log(
  ...arrayOfGames.slice(0, index),
  "game2.5",
  ...arrayOfGames.slice(index)
);

console.log(
  ...arrayOfGames.slice(0, index - 1),
  (arrayOfGames[index - 1] = "game2UPGRADE!"),
  ...arrayOfGames.slice(index)
);

//////////////
//ARRAY METHOD TOO- MAP

const arrayOfGames2 = arrayOfGames.map((game) =>
  game === "game1" ? "First Game!" : game
);
console.log("null or not to null? ", arrayOfGames2);
console.log("array of games", arrayOfGames);

///////////
//////////
// PLAYING WITH THE STORE:
///////////
//////////
console.log("ORIGINAL STORE", store);

store.dispatch(addTask("New Task ... it's magic... I knowwww"));
store.dispatch(addTask("OTHER Task... never believe .."));

console.log("UPDATED STORE - 2 TASKS", store.getState());

const deleteThisId = getId(0);
console.log(deleteThisId);

store.dispatch(removeTask(deleteThisId));
console.log("UPDATED STORE - 1 TASK DELETED", store.getState());

///////////
//////////
// SUBSCRIBE / UNSUBSCRIBE:
///////////
//////////

const unsubscribe = store.subscribe(() => {
  let Color: string = "background: #272; color: #aada55; font-size: 20px";
  console.log("%cYou are Subscribed!", Color);
  let subColour: string = "background: #272; color: #aada55; font-size: 10px";
  console.log("%cThis function runs every time the store is used", subColour);
  console.log("new task from api call: ", store.getState());
});

// now, when the store is changed, we will auto run the subscription function
store.dispatch(addTask("a final task..."));

store.dispatch(addTask("and yet final task..."));

// unsubscribe();

store.dispatch(addTask("ANDDDDD yet ANOTHER final tasK..."));

///////////
//////////
// TASK COMPLETE
///////////
//////////
const idToSetComplete = getId(1);
store.dispatch(taskComplete(idToSetComplete));

console.log("Completed one task: ", store.getState());

///////////
///////////
// thunk and apis
// store.dispatch(fetchTodoTask());

///////
// edit task

const idToEdited = getId(1);
const taskEdited = "Yeahhhhh boi";
const editPayload = { id: idToEdited, task: taskEdited };
store.dispatch(editTask(idToEdited, taskEdited));
