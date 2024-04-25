import axios from "axios";
import { useEffect, useState } from "react";

const endpoint="https://randomuser.me/api/"
const useAxios=()=>{
   const[data,setdata]=useState([])

    useEffect((URL=endpoint)=>{
        //  axios.get("https://randomuser.me/api/")
        // axios.get(endpoint)
        axios.get(URL)
         .then(response=>{
            console.log(response,"response")
              setdata(response.data.results)
         })
    },[])
    return [data] 
}
export default useAxios;