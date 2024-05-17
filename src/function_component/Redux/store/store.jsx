import { legacy_createStore } from "redux";

import { rootReducer } from "../multiReducer";


//  export const reduxStore=legacy_createStore(todoReducer)

export const reduxStore=legacy_createStore(
    rootReducer,
    
    
)