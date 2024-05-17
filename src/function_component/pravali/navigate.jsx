import { createContext, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PravaliHome from "./home"
import PravaliContact from "./contact"
import PravaliProducts from "./products"
import PravaliCart from "./cart"
import PravaliLogin from "./login"


 export const DataShare=createContext()

const  PravaliNavigate=()=>{
    const[login,setlogin]=useState(true)
    const[cartitems,setcartitems]=useState([])
    // const [data,setdata]=useState ({
    //     name:"pravali",
    //     city:"hyderabad",
    //     isindian:true,                                 
    //     mobile:9908660636,
    //     count:10
    //  })

    //  const changeData=()=>{
    //     setdata({...data,count:data.count+10})               
    //  }

const addCartItems=(eachItem)=>{
        setcartitems([...cartitems,eachItem])
}

//    const removeCartItems=(id)=>{
//       cartitems.filter((eachItem,i)=>i!==id)
//         setcartitems({cartitems})
//    }
    return(
        <>
         <DataShare.Provider value={{
            // name:"pravali",
            // city:"hyderabad",                                         
            // isindian:true,                
            // mobile:9908660636,
            // count:10
            // data,changeData,
                 cartitems,
                 addCartItems
                //  removeCartItems
         }}>


        <BrowserRouter>
        {
           login
        ?
        <Routes>
        <Route path="/" Component={PravaliHome}></Route>
       <Route path="/contact" Component={PravaliContact}></Route>
        {/* <Route path="*" Component={InvalidScreen1}></Route> */}
        <Route path=":brand/:productId" Component={PravaliProducts}></Route>
        <Route path="/cartscreen" Component={PravaliCart}></Route>
        </Routes>

        :
        <Routes>
            <Route path="/" Component={PravaliLogin}></Route>
        </Routes>

        }
        </BrowserRouter>
        </DataShare.Provider>
   
        </>
    )
}
export default PravaliNavigate
