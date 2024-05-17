

const initialState={
    profileName:"user 123",
    age:21,
    city:"hyderabad"
}

const ProfileReducer=(state=initialState,action)=>{
    switch(action.type){
        case "UPDATE-USERNAME":
            return{...state,profileName:action.payload}
        default :
        return state
    }
    
}
export default ProfileReducer