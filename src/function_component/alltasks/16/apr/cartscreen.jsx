// import { createContext, useContext } from "react"
// import Header from "../../../react-navigation/components/header"







// const CartScreen=()=>{
     
// //    const{cartItems,RemoveCartItems} =useContext(cartData)

  
//     return(
//          <>
//          {
//             cartItems.length>0
//             ?
//             <>
//             <h3>cart items exists</h3>
//             {
//                 cartItems.map(eachcart=>{
//                     const{brand,title,thumbnail,id}=eachcart
//                     return(
//                         <>
//                         <h3>{brand}</h3>
//                         <h3>{title}</h3>
//                         <img src={thumbnail} alt={id} width={200}/>
//                         {/* <button onClick={()=>RemoveCartItems(id)}>remove cart</button> */}
//                         </>
//                     )

//                 })
//             }
//             </>
//             :
//             <h3>cart is empty</h3>

//          }
//         </>
//     )
// }
// export default CartScreen


const CartScreen=()=>{
    return(
        <>
        <h3>welcome to cart screen</h3>
        </>
    )
}
export default CartScreen