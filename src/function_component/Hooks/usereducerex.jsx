import { type } from "@testing-library/user-event/dist/type"
import { useReducer } from "react"

const reducerFunction=(state,action)=>{

    switch(action.type){
        case "Increment-age":
        return{...state,age:state.age+10}

        case "Decrement-age":
        return{...state,age:state.age-10}

        case "Reset-age":
        return{...state,age:22}

        case "Increment-count":
        return{...state,count:state.count+1}

        case "Decrement-count":
        return{...state,count:state.count-1}

        case "Reset-count":
        return{...state,count:10}

        case "Change-name":
        return{...state,name:"radika"}

        case "Add todo":
        return {...state,todos:[...state.todos,"new todo"]}

        default:
         return state
    }

}
const intialstate={
    name:"manisha",
    age:22,
    rollno:23,
    salary:1000,
    subarr:[1,2,3],
    count:10,
    todos:[]
}

const UseReducerEx=()=>{
    const [currentValue,dispatchFunction]=useReducer(reducerFunction,intialstate)
    const IncrementAge=()=>{
            const action={
                type:"Increment-age"
            }
            dispatchFunction(action)
    }

    const DecrementAge=()=>{
        const action={
            type:"Decrement-age"
        }
        dispatchFunction(action)

    }

    const Addtodo=()=>{
        const action={
            type:"Add todo"
        }
        dispatchFunction(action)
    }
    return(
        <>
           <h3>usereducer example:</h3>
           <h5>{currentValue.age}</h5>
           <h5>{currentValue.name}</h5>
           <h5>{currentValue.todos}</h5>
           <button onClick={IncrementAge}>increment age</button>
           <button onClick={DecrementAge}>decrement age</button>
           <button onClick={()=>{
            dispatchFunction({
                type:"Change-name"
            })
           }}>change name</button>
           <button onClick={Addtodo}>Add todos</button>
           </>
    )
    
}
export default UseReducerEx;




