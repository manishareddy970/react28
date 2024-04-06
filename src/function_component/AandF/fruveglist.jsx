
import { VegFruits } from "./fruveg";




const FruVegList=()=>{
    const Isfruit=true;                              
    return(
         <>

        {
             Isfruit?
             <Count msg={VegFruits.name}/>
             :
             <Count msg={"hiii"}/>
        }
         
         </>
    )
}
export default FruVegList;

const Count=({msg1})=>{
    // const {msg}=msg1
    return(
        <>
       <h3>{msg1.name}</h3>
       {/* <h3>{msg.msg1.type}</h3> */}
   
   </>
    )
}





