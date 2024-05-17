import { Provider } from "react-redux";
import Navigation from "./function_component/alltasks/15/apr/apr/navigate";
import CartScreen from "./function_component/alltasks/16/apr/cartscreen";
import PravaliCart from "./function_component/pravali/cart";
import PravaliContact from "./function_component/pravali/contact";
import PravaliHeader from "./function_component/pravali/header";
import PravaliHome from "./function_component/pravali/home";
import PravaliLogin from "./function_component/pravali/login";
import PravaliNavigate from "./function_component/pravali/navigate";
import PravaliProducts from "./function_component/pravali/products";
import Header from "./function_component/react-navigation/components/header";
import NavigationStack from "./function_component/react-navigation/navigation-stack";
import Home from "./function_component/react-navigation/pages/home-screen";
import { reduxStore } from "./function_component/Redux/store/store";
import UseCallbackEx from "./function_component/Hooks/usecallback/parent";
import UseEffectEx from "./function_component/Hooks/useeffect";
import UseEffectEx1 from "./function_component/Hooks/useEffect/useEffect";
import UseStateEx3 from "./function_component/Hooks/usestate-ex3";







function App() {
 return (
   <div>
  
    <Provider store={reduxStore}>
    <PravaliNavigate/>
    </Provider>
        {/* <UseCallbackEx/> */}
        {/* <UseEffectEx1/> */}
        {/* <UseStateEx3/> */}
{/* <PravaliProducts/> */}
{/* <PravaliLogin/> */}
{/* <PravaliHome/> */}
{/* <PravaliContact/> */}
{/* <PravaliCart/> */}
{/* <PravaliHeader/> */}

 
   </div>
  )
}

 export default App;

// const ButtonComponentCustom=()=>{
//   return(
//     <button>hello</button>
//   )
// }

