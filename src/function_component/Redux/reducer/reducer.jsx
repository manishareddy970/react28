


const initialState={
    todos:["apple","banana","papaya","orange"],
    count:100
}
const todoReducer=(state=initialState,action)=>{
      switch(action.type){
            case "ADD-TODO":
            //     return{...state,todos:[...state.todos,"new todo"]}
            return{...state,todos:[...state.todos,action.payload]}
           case "Increment-Count":
            return{...state,count:state.count+1}
            default :
            return state
      }
}
export default todoReducer;