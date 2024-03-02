import {compose, pipe} from "lodash/fp"


console.log("The Redux Starter Project!!");



let user = "   Tom  "

const trim = (name:string) => name.trim()
const message = (trimmedName:string) => `Hi there ${trimmedName}!`
const pipeMessage = (mainMessage:string) => `${mainMessage} Generated with pipe lodash`
const printMessage = (fullMessage:string)=> console.log(fullMessage)

const newComposeFuncLodash: (name: string) => void = compose(printMessage,message,trim)
newComposeFuncLodash(user)




const newPipeFuncLodash: (name: string) => void = pipe(trim,message,pipeMessage,printMessage)
newPipeFuncLodash(user)
// console.log(newPipeFuncLodash);
