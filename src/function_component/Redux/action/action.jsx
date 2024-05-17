import { type } from "@testing-library/user-event/dist/type"


export const todoActionAdd=(todo)=>{
    const todoAction={
        type:"ADD-TODO",
        payload:todo
  }
  return todoAction;
 }


 export const todoIncrementAdd=()=>{
    const todoAction={
        type:"Increment-Count"
  }
  return todoAction;
 }
 
