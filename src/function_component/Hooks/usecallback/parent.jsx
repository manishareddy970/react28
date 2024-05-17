import { useCallback, useState } from "react";
import CustomButton from "./child";
import Heading from "./purecompo";



const UseCallbackEx=()=>{
    const[age,setage]=useState(10)
    const[salary,setsalary]=useState(10000)

    // const incrementage=()=>{         
    //     console.log("age")          //to control this drawback go to next....
    //     setage(age+1)
    // }

    // const incrementsalary=()=>{
    //     console.log("salary")
    //     setsalary(salary+1)
    // }

    const incrementage=useCallback(()=>{
            console.log("age")
                 setage(age+1)
        },[age])

        const incrementsalary=useCallback(()=>{
            console.log("salary")
                 setsalary(salary+1)
        },[salary])

    return(
      <>
      <h3>UseCallback Example </h3>
      <Heading/>
      <h3>age:{age}</h3>
      <h3>salary:{salary}</h3>

      {/* <CustomButton title="increment age" handleClick={incrementage}/>
      <CustomButton title="increment salary" handleClick={incrementsalary}/> */}
      <button onClick={incrementage}>age</button>

    </>
    )
}
export default UseCallbackEx;