


  //using if-else conditional rendering 


// const Render=()=>{
//     const isLoggedIn=true;    //false
//     if(isLoggedIn){
//     return(
//          <h3>welcome user</h3>
//     )}
//     else{
//         return(
//             <h3>please login</h3>
//         )

//     }
// }

// export default Render;


//ternary rendering....


// const Render=()=>{
//     const isLoggedIn=false
//     return(
//        <h3>{isLoggedIn ?"welcome user":"please login"}</h3>
//     )
// }
// export default Render;







// conditional componnets rendering...

// const Render=()=>{
//     const isLoggedIn=true
//     return(
//         <>

//         {
//             isLoggedIn?
//             <Text msg="login true"/>
//             :
//             <Text msg="login false"/>
//         }
//         </>
//     )
// }
// export default Render;

// const Text=({msg})=>{
    
//     return(
//         <h4>{msg}</h4>
//     )
// }




//logical and 

const Render=()=>{
    const isLoggedIn=false     //true
    return(
        <>
        {
            isLoggedIn &&
            <Text msg="login true"/>


        }
        </>
    )
}
export default Render;

const Text=({msg})=>{
    
    return(
        <h4>{msg}</h4>
    )
}


