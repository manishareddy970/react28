



const initialState={
    products:[],
    error:false
}

const ProductsReducer=(state=initialState,action)=>{
    switch(action.type){
       case "PRODUCTS-SUCCESS" :
        return{...state,products:action.payload}
       case "PRODUCTS-FAILURE" :
        return{...state,error:action.payload}
        default :
        return state
    }
}
export default ProductsReducer;