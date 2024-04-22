import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import "./stylepro.css"
import Header from "../../../../react-navigation/components/header";
import { Data } from "./navigate";

const SeeData=()=>{
    // const{ AddCartItems}=useContext(Data)
    const {productid}=useParams()
  
    const[product,setproduct]=useState({})

    useEffect(()=>{
        Axios()
    },[productid])

    const Axios=async()=>{
        try{
        const result=await axios.get(`https://dummyjson.com/products/${productid}`)
        
        if(result.status==200){
            setproduct(result.data)
        }
    }
    catch(err){
        console.log(err)
    }
    }
    return(

        <>
        {/* <Header/> */}
       <h3 style={{textAlign:"center"}}>Product Details</h3>
       <div className="product">
      {
       <div className="card">
        <h3>{product?.id}</h3>
        <h3>{product?.title}</h3>
        <h3>{product?.brand}</h3>
        <img src={product?.thumbnail} alt="id" width={200} height={200}/>
        <h3>{product?.price}</h3>
        {/* <button onClick={()=> AddCartItems(eachpro)}>Add To Cart</button> */}
        </div>
        
      }
      </div>
      </>
    )
}
export default SeeData;