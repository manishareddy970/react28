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
import { useState } from "react"


const NavigationStack=()=>{
    const[login,setlogin]=useState(false)
    return(
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
       
    )
}
export default NavigationStack;
