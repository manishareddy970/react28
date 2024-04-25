import { useMemo, useState } from "react";

const UseMemoEx=()=>{
    const [Age,setAge]=useState(10)
    const[Salary,setSalary]=useState(100000)

    // const AgeCheck=()=>{
    //    console.log("render age")        //to solve this problem
    //    const even= Age % 2==0
    //    return even ? "even" : "odd"
       
    // }
  const AgeCheck= useMemo(()=>{
    console.log("render age") 
    const even= Age % 2==0
    return even ? "even" : "odd"
   },[Age])
  
    const incrementAge=()=>{
        setAge(Age+1)
    }

    const incrementSalary=()=>{
        setSalary(Salary+101)
    }
    return(
           <>
           <h3>usememo example</h3>
           <h3> Age:{AgeCheck}</h3>
           <h3>{Age}</h3>
           <h3>Salary:{Salary}</h3>
           <button onClick={incrementAge}>increment age</button>
           <button onClick={incrementSalary}>increment salary</button>


           </>
    )
}
export default UseMemoEx;