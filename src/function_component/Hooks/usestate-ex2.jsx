// import { useState } from "react";

import { useState } from "react"

// const UseStateEx2=()=>{
//     const [fruits,setfruits]=useState(["apple","banana"])
//     return(
//         <>
//         <h3>usestate ex2</h3>
//         {/* <h3>{fruits}</h3> */}
//         {
//             fruits.map((eachfruit,index)=><h4 key={index}>{eachfruit}</h4>)
//         }
//         </>
//     )
// }
// export default UseStateEx2;

//addfruits....
    const UseStateEx2=()=>{
    const [fruits,setfruits]=useState(["apple","banana"])
    const Addfruit=()=>{
        const newfruit=[...fruits,"new fruit"]
        setfruits(newfruit)
    }

    
    // const UseStateEx2=()=>{
    //     const [fruits,setfruits]=useState(["apple","banana","water melon","papaya"])

    //          const Delfruit=(index)=>{
    //             // console.log(index)

    //             const newfruit=fruits.filter((fruits,i)=>i!==index)
    //                   console.log(newfruit)
    //                 //   setfruits(newfruit)
    //          }
    

    return(
        <>
        <h3>UseState Example</h3>
        {/* <button onClick={Delfruit}>delfruits</button> */}
        <button onClick={Addfruit}>addfruits</button>
        
        {
            fruits.map((eachfruit,index)=><h4 key={index}>{eachfruit}</h4>)
            
        }
        
        </>
    )
} 
export default UseStateEx2