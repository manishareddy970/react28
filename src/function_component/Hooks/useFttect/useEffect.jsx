import axios from "axios";
import { useEffect, useState } from "react";



const UseEffectEx=()=>{
    const [prolist,setprolist]=useState([])
    const[count,setcount]=useState(1)
    useEffect(()=>{
        console.log("useeffect rendering....")
        AxiosData()
    },[])

    useEffect(()=>{
        console.log("useeffect rendering....")
        AxiosData()
    },[count])

    
    const increment=()=>{
        setcount(count+1)
    }
   
       

    // useEffect(()=>{
    //     console.log("useeffect rendering....")
    //     AxiosData()
    // })

    useEffect(()=>{
        console.log("useeffect rendering....")
        AxiosData()
        return()=>{
            //prevent memory leaks
        }
    },[])

    useEffect(()=>{
           Data()
    },[count])

    
   const AxiosData=async()=>{
        let result=await axios.get("https://dummyjson.com/products")
        console.log(result)
        // this.setState({
        //  setprolist:result.data.products
        // }).
        setprolist(result.data.products)
     }


     const Data=async()=>{
        let result=await axios.get(`https://dummyjson.com/products/${count}`)
        console.log(result)
     }
   
    return(
        <>
        <h3>useeffect example</h3>
        <h3>{count}</h3>
        <button onClick={increment}>count</button>
        </>

    )
}
export default UseEffectEx;