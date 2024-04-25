import { useState } from "react";



const useCounter=(value,scale)=>{
    // const [count,setcount]=useState(0)
    const [count,setcount]=useState(value)

    const incrementcount=()=>{
        setcount(count+scale)
    }
    const decrementcount=()=>{
        if(count>0){
        setcount(count-scale)
        }
    }
    const reset=()=>{
        setcount(0)
    }

    return[count,incrementcount,decrementcount,reset]
}
export default useCounter;