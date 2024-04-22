import { BrowserRouter, Route, Routes } from "react-router-dom";
import SeeData from "./prodetails";
import Routing from "../task";
import CartScreen from "../../../16/apr/cartscreen";
import { createContext, useState } from "react";



    
//    export const DataShare=createContext()
    export const Data=createContext()
   const Navigates=()=>{
      
       const[CartItems,setCartItems]=useState([])

       const AddCartItems=(eachitem)=>{
             setCartItems([...CartItems,eachitem])
       }

       const removeCartItems=(id)=>{
              setCartItems([CartItems.filter((eachitem)=>eachitem!==id)] )
               }


       
    return(
       //    <DataShare.Provider value={{CartItems}}>
       <Data.Provider value={{
              CartItems,
              AddCartItems,
              removeCartItems
       
             }}>
           <BrowserRouter>
           <Routes>
            <Route path="/" Component={Routing}/>
            <Route path=":brand/:productid" Component={SeeData}/>
            <Route path="/cart" Component={CartScreen}/>
           </Routes>
           </BrowserRouter>
       {/* //     </DataShare.Provider> */}
      </Data.Provider>


    )
   }
   export default Navigates;