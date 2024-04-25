
import React from "react"

// const Heading=()=>{
//     console.log("headinggg....")
//   return(
//      <>
//       <h3>form</h3>
//      </>
//   )
// }
// export default Heading;         pure components....



const Heading=()=>{
    console.log("headinggg....")
  return(
     <>
      <h3>form</h3>
     </>
  )
}
export default React.memo(Heading)