import axios from "axios"
import { useContext, useEffect, useState } from "react"
import PravaliHeader from "./header"
import { DataShare } from "./navigate"
import { Link, redirect } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { todoActionAdd } from "../Redux/action/action"


const PravaliHome=()=>{
    const [products,setproducts]=useState([])
    const{addCartItems} =useContext(DataShare)
    
    const[todovalue,settodovalue]=useState("")
    const dispatch=useDispatch()
    // const {todos}=useSelector(state=>state)
    // const reduxStore=useSelector(state=>state)
    // console.log(reduxStore)
    const todos=useSelector(state=>state.todos.todos)
    console.log(todos)
  


    
    useEffect(()=>{
        fetchProducts()
     },[])
     const fetchProducts=async()=>{
         try{
             const response=await axios.get("https://dummyjson.com/products")
             console.log(response)
             if(response.status==200){
                 setproducts(response.data.products)
             }
             else{
                 console.log("error")
             }
         }
         catch(err){
             console.log(err)
         }
           
     }

     const addtodo=()=>{
        
        console.log(todovalue)

        dispatch(todoActionAdd(todovalue))
     }

     const inputtodovalue=(event)=>{
             settodovalue(event.target.value)
     }

    return(
        <>
        <input type="text" value={todovalue} onChange={inputtodovalue}/>
        <button onClick={addtodo}>add todo</button>
        {
              todos.map(todo=>
              <>
              <h3>{todo}</h3>
              </>)
            }


       <PravaliHeader/> 

        {
           products.length>0
           ?
                <>
            {

    products.map(eachProduct=>{
    const{brand,category,description,title,price,thumbnail,id}=eachProduct
    return( 
        <>
          <h3>{title}</h3>
          <p>{description}</p>
          <h3>{price}</h3>
          <h3>{category}</h3>
          <img src={thumbnail} alt="image"/>
            <button >
            <Link to={`${brand}/${id}`}>click to see product</Link>
            </button>  
            
            <button onClick={()=>addCartItems(eachProduct)}>add to cart</button>
          </>
          
    )
    })

     }
  </>
    :
 <h3>loading...</h3>
   }

</>
)
}
    
export default PravaliHome




