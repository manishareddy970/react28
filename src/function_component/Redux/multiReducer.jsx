import { combineReducers } from "redux";
import ProfileReducer from "./reducer/profileReducer";
import ProductsReducer from "./reducer/productReducer";
import todoReducer from "./reducer/reducer";



 export const rootReducer=combineReducers(

     {
        profile:ProfileReducer,
        products:ProductsReducer,
        todos:todoReducer
     }
    

)