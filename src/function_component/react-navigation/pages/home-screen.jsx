import { useContext, useEffect, useState } from "react";
import ProductListing from "../../../class_components/lifecycle/mounting/productilisting";
import Header from "../components/header";
import axios from "axios";
import { Link } from "react-router-dom";
import { DataShare } from "../navigation-stack";
import UseEffectEx from "../../Hooks/useeffect";
import UseReducerEx from "../../Hooks/usereducerex";


const Home=()=>{
    const[products,setproducts]=useState([])
//    const Response= useContext(DataShare)                  step:5
// const {name}= useContext(DataShare)  

const {data,ChangeData}=useContext(DataShare)  
console.log(data);     
   
   console.log(Response)
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
         {/* <h4>Welcome to homescreen {Response.name}</h4>         //step 5 */}
         {/* <h4>Welcome to homescreen {name}</h4> */}
         <h3 style={{border:"1px solid black",width:"200px",height:"200px",marginLeft:"700px",backgroundColor:data.color}}></h3>
         <button onClick={ChangeData}>click to change color</button>
         <UseEffectEx/>
         <h3>UseContext example:</h3>
         {/* <h4>Welcome to homescreen {data.count}</h4>
          <button onClick={ChangeData}>click to increase count</button> */}
          <UseReducerEx/>
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

