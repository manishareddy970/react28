import React  from "react"

// const CustomButton=({handleClick,title})=>{
//     console.log(" button rendering " ,title)
//     return(
//        <>
//        <button onClick={handleClick}>{title}</button>
//        </>
//     )
// }
// export default CustomButton;

const CustomButton=({handleClick,title})=>{
    console.log(" button rendering " ,title)
    return(
       <>
       <button onClick={handleClick}>{title}</button>
       </>
    )
}
export default React.memo(CustomButton)               //instead of pure component....





