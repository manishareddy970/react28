import useAxios from "./useaxios";
import useCounter from "./usecounter";


const CustomHookEx=()=>{
 const [count,incrementcount,decrementcount,reset]=useCounter()
 const [age,incrementage,decrementage,resetage]=useCounter(100,1)                //100 start value ,1 increment scale
 const [salary,incrementsalary,decrementsalary,resetsalary]=useCounter(10000,500) 
 
const[data]=useAxios("https://randomuser.me/api/")
 const[femaledata]=useAxios("https://randomuser.me/api/?gender=female")
 const [products]=useAxios("https://fakestoreapi.com/products")
 console.log(products)
 console.log(femaledata)
 console.log(data)
   return(
    <>
    <h3>Custom Hook Example</h3>
    <h3>{count}</h3>
    <button onClick={incrementcount}>increment count</button>
    <button onClick={decrementcount}>decrement count</button>
    <button onClick={reset}>reset count</button>

    <h3>{age}</h3>
    <button onClick={incrementage}>increment age</button>
    <button onClick={decrementage}>decrement age</button>
    <button onClick={resetage}>reset age</button>

    <h3>{salary}</h3>
    <button onClick={incrementsalary}>increment salary</button>
    <button onClick={decrementsalary}>decrement salary</button>
    <button onClick={resetsalary}>reset salary</button>
    

    </>
   )
}
export default CustomHookEx;
