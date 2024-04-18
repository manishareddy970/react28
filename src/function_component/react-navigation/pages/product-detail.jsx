import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ProDetail=()=>{
  // const dynamicContent=useParams()
  const {productid}=useParams()
  const [product,setproduct]=useState({})

            useEffect(()=>{
             FetchPro()
             },[productid])

  const FetchPro=async()=>{
    try{
    // const response=await axios.get(`https://dummyjson.com/products/${dynamicContent.productid}`)
    const response=await axios.get(`https://dummyjson.com/products/${productid}`)
    console.log(response)
    if(response.status==200){
      setproduct(response.data)
    }
  }
  catch(err){
    // console.error(err)
    console.log(err)
  }
  }
  // console.log(dynamicContent ,"step 1")
    return(
        <>
          <h2>Product details</h2>
          {
            <>
            <h5>{product?.brand}</h5>
            <h5>{product?.category}</h5>
            <h5>{product?.description}</h5>
            <h5>{product?.title}</h5>
            <h5>{product?.price}</h5>
            <img src={product?.thumbnail} alt={product?.title}/>

            </>
          }
        </>
    )
}
export default ProDetail;