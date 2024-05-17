import { useContext } from "react"
import { DataShare } from "./navigate"
import PravaliHeader from "./header"
import { useSelector } from "react-redux"



const PravaliCart=()=>{
    //  const reduxdata= useSelector(state=>state)
    //  console.log(reduxdata)

     const {todos}=useSelector(state=>state)
     console.log(todos)

            const{cartitems,removeCartItems}=useContext(DataShare)
          
           console.log(cartitems,"cartitems")
    return(
        <>
        <h3> welcome to cart screen</h3>
       <PravaliHeader/>
            {
              todos.map(todo=>
              <>
              <h3>{todo}</h3>
              </>)
            }

        {
           cartitems.length>0
            ?
            <>
          {
            cartitems.map(eachCart=>{
                const{brand,title,thumbnail,id}=eachCart
                return(
                    <>
                    <h3>{brand}</h3>
                    <h3>{title}</h3>
                    <img src={thumbnail} alt="image" width={200} height={150}></img>
                    {/* <button onClick={()=>removeCartItems(id)}>remove cart</button> */}
                    </>
                     )
            })
          }
          </>
            :
            <h3>no cart items</h3>
        }
        </>
    )
}
export default PravaliCart
