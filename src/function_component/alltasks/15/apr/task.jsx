
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "../../06/apr/styles.css"
import { Link } from "react-router-dom";
import Header from "../../../react-navigation/components/header";
import { Data } from "./apr/navigate";


const Routing=()=>{
    const{ AddCartItems}=useContext(Data)
    const[products,setproducts]=useState([])
   
    
    useEffect(()=>{
        AxiosData()
    },[])


    const AxiosData=async()=>{
        const response=await axios.get("https://dummyjson.com/products")
        console.log(response)
        if(response.status==200){
        setproducts(response.data.products)
        }
        else{
            console.log("no products")
        }
    }
    return(
        <>
            <Header/>
        <h3 style={{textAlign:"center"}}>Product Details</h3>
       
        <div className="productlist">
        {
           products.map(eachpro=>{
            const{id,title,brand,thumbnail,price}=eachpro
            return(
                <div className="cardlist">
                <h3>{id}</h3>
                <h3>{title}</h3>
                <h3>{brand}</h3>
                <img src={thumbnail} alt="id" width={200} height={200}/>
                <h3>{price}</h3>
                 <button>
                    <Link to={`${brand}/${id}`} style={{textDecoration:"none",color:"black"}}>Click To See Product Details</Link>
                 </button><br/><br/>
                 <button onClick={()=> AddCartItems(eachpro)}>Add To Cart</button>
                
            </div>
            )
           })
           
        }
        </div>
       </>
    )
}
export default Routing;