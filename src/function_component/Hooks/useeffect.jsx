import { useEffect, useState } from "react";

const UseEffectEx=()=>{
    const [X,setX]=useState(0)
    const[Y,setY]=useState(0)

    const MouseEventCapture=(event)=>{
        setX(event.clientX)
        setY(event.clientY)
        console.log(event.clientX,"event captured by x axios")
        console.log(event.clientY,"event captured bu y axios")
    }

    useEffect(()=>{
        window.addEventListener("mousemove",MouseEventCapture)

        return()=>{
            window.removeEventListener("mousemove",MouseEventCapture)
        }
    },[])
    return(
        <>
         <h3>useeffect example:</h3>
        <h4>event captured by {X}</h4>
        <h4>event captured by {Y}</h4>
        </>
    )
}
export default UseEffectEx;