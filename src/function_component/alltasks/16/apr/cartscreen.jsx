import { useContext } from "react";
import Header from "../../../react-navigation/components/header";
import { DataShare } from "../../../react-navigation/navigation-stack";
import { Data } from "../../15/apr/apr/navigate";


const CartScreen=()=>{
    // const {CartItems}=useContext(DataShare)
    const{CartItems, removeCartItems} =useContext(Data)
    console.log(CartItems)
    return(
          <>
          <Header/>
          {
            // CartItems.length>0
            // ?
            // <h3>Cart Items Exists</h3>
            // :
            // <h3>Cart Is Empty</h3>  
            CartItems.map(eachCart=>{
                const{thumbnail,brand,price,id}=eachCart
                return(
                    <>
                    <img src={thumbnail} alt="id" width={100} height={100}/>
                    <h3>{brand}</h3>
                    <h3>{price}</h3>
                    <button onClick={()=> removeCartItems(eachCart.id)}>Remove From Cart</button>
                    </>
                )
            })
          }
          </>
    )
}
export default CartScreen;