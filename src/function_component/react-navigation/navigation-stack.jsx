// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Home from "./pages/home-screen"
// import Contact from "./pages/contact-screen"
// import InvalidScreen from "./pages/invalid-screen"

// //static navigation....
// const NavigationStack=()=>{
//     return(
//        <BrowserRouter>
//        <Routes>
//         <Route path="/" Component={Home}/>
//         <Route path="/contact" Component={Contact}/>
//         <Route path="*" Component={InvalidScreen}/>


//        </Routes>
//        </BrowserRouter>
       
//     )
// }
// export default NavigationStack;


//dynamic navigation...

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home-screen"
import Contact from "./pages/contact-screen"
import InvalidScreen from "./pages/invalid-screen"
import ProDetail from "./pages/product-detail"
import LoginScreen from "./pages/login-screen"
import { createContext, useState } from "react"

 
//global management....
 export const DataShare=createContext()               //step:1

const NavigationStack=()=>{
    const[login,setlogin]=useState(true)
    const[data,setdata]=useState(
      {name:"manisha",
      city:"hyderbad",
      isIndian:true,
      count:10,
      mobile:9701443560}
    )

    const ChangeData=()=>{
      // setdata({...data,name:"radika"})
      setdata({...data,count:data.count+1})
    }


    return(
      <DataShare.Provider value={{
        // data:data,
        // ChangeData:ChangeData
        data,
        ChangeData
      }}>         
       <BrowserRouter>
       {
        login
        ?
       <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="*" Component={InvalidScreen}/>
        <Route path=":brand/:productid" Component={ProDetail}/>
       </Routes>
       :
       <Routes>
        <Route path="/" Component={LoginScreen}/>
       </Routes>
     }
       </BrowserRouter>
       </DataShare.Provider>
       
    )
}
export default NavigationStack;
