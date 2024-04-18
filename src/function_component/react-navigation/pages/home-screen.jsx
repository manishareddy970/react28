import { useEffect, useState } from "react";
import ProductListing from "../../../class_components/lifecycle/mounting/productilisting";
import Header from "../components/header";
import axios from "axios";
import { Link } from "react-router-dom";


const Home=()=>{
    const[products,setproducts]=useState([])

    useEffect(()=>{
        FetchProducts()
    },[])

    const FetchProducts=async()=>{
        try{
        const response = await axios.get("https://dummyjson.com/products")
        console.log(response)
        if(response.status==200){
            setproducts(response.data.products)
        }
        else{
            console.error("unexpected error")
        }
        }
        catch(err){
            console.error(err)
        }
    }
    return(
          <>
        
         <Header/>
         {/* <ProductListing/> */}
         <h4>Welcome to homescreen</h4>
         {
            
           products.length>0
           ?
           <>
           {
            products.map(eachproduct=>{
                const{brand,category,description,title,price,thumbnail,id}=eachproduct
                return(
                    <>
                    <h4>{brand}</h4>
                    <h4>{category}</h4>
                    <p>{description}</p>
                    <h4>{title}</h4>
                    <h4>{price}</h4>
                    <img src={thumbnail} alt={title}/>
                    <button>
                        <Link to={`${brand}/${id}`} style={{textDecoration:"none",color:"black"}}>     
                        click to see product
                        </Link>
                    </button>
                    </>
                )
            })

           }
           </>
           :
           <h3>loading....</h3>
        }
        </>
    )
}
export default Home;