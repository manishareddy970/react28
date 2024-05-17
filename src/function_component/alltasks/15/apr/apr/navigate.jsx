import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../../../react-navigation/pages/home-screen";
import CartScreen from "../../../16/apr/cartscreen";
import Header from "../../../../react-navigation/components/header";

 

 export const cartData=createContext()

const Navigation=()=>{
      const [cartItems,setcartItems]=useState([])

      const AddCartItems=(eachitem)=>{
        setcartItems([...cartItems,eachitem])

      }
      // const RemoveCartItems=(id)=>{
      //   cartItems.filter((eachitem,i)=>i==id)
      //   setcartItems({cartItems})
      // }
  return(
    <>

    <Header/>
    <cartData.Provider value={
      { cartItems,
        AddCartItems,
        // RemoveCartItems
      }
      
      }>
          <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/cart" Component={CartScreen}/>
          </Routes>
          </BrowserRouter>
    </cartData.Provider>
    </>
        
  )
}
export default Navigation;