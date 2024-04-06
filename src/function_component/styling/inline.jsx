

// const CustomText=()=>{
//     return(
//         <h4 style={{
//             color:"red",
//             backgroundColor:"green"
//         }}
//         >hello inline style</h4>
//     )
// }
// export default CustomText;


const CustomText=()=>{
    const textstyle={
        color:"blue",
        backgroundColor:"green"
    }
    return(
        <h4 style={textstyle}>hello inline style</h4>
    )
}
export default CustomText;
