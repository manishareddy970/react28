// import { useState } from "react";

// const UseStateEx1=()=>{
//     const [count,setcount]=useState(10)

//     return(
//         <>
//         <h3>usestate example1</h3>
//         <h3>{count}</h3>
        

//         </>
//     )
// }
// export default UseStateEx1;



// increment count

// const UseStateEx1=()=>{
//     const[count,setcount]=useState(10)
//    const incrementhandler=(value)=>{
//         // setcount(precount=>precount+1)
//     //    setcount(count+1)
//     setcount(count+value)
//     }
//     return(
//         <>
//         <h3>{count}</h3>
//         {/* <button onClick={incrementhandler}>increment count</button> */}
//         <button onClick={()=>incrementhandler(10)}>increment count</button>

//         </>
//     )
// }
// export default UseStateEx1


// crud operations
import { useState } from "react"
const UseStateEx1=()=>{

    const [count,setcount]=useState(10)

    const changehandler=(value,type)=>{
        if(type==="increment"){
            setcount(count+value)
    }
    
    else if(type==="decrement"){
        setcount(count-value)
    }

    else{
        setcount(0)
    }
}
    return(
        <>
        <h3>counter example</h3>
        <h3>{count}</h3>
        <button onClick={()=>changehandler(10,"increment")}>increment</button>
        <button onClick={()=>changehandler(10,"decrement")}>increment</button>
        <button onClick={()=>changehandler(0)}>increment</button>
       
       
        </>
    )
}
export default UseStateEx1


