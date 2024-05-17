import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"





const PravaliProducts=()=>{
    // const dynamicContent=useParams()
    const{productId}=useParams()
    const[product,setproduct]=useState({})
   
    useEffect(()=>{
        fetchProduct()
    },[productId])
    const fetchProduct=async()=>{
        try{
           const response=await axios.get(`https://dummyjson.com/products/${productId}`)
           console.log(response)
            if(response?.status==200){
                setproduct(response.data)
            }
            else{
                console.log("error")
            }
        }
        catch(err){
            console.log(err)
        }
    }
    // console.log(dynamicContent,"step1")
    return(
        <>
     <h3>product details</h3>
   
     {
      
        <>
           
        <h4>{product?.brand}</h4>
        <h4>{product?.category}</h4>
        <img src={product?.thumbnail} alt="image"/>
        </>
     }
        </>
    )
}
export default  PravaliProducts
