








// const Greeting=()=>{
//     return(
//         <h3>good morning</h3>
//     )
// }
// export default Greeting;




// const Greeting=(props)=>{
//     return(
//     <>
//     {props.children}
//     </>
//     )
// }
// export default Greeting;




const Greeting=(props)=>{  
    const{children}=props
      return(
         children
    )
}
export default Greeting;