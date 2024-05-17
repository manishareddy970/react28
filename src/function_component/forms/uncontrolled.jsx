import { useRef, useState } from "react";


   const UnControlledCompo=()=>{
   const usernameRef=useRef("")
   const passwordRef=useRef("")

    const [errorvisible,seterrorvisible]=useState(false)

   const Handler=(event)=>{
       event.preventDefault()
      // console.log("submitted")
      
      const userInput=usernameRef.current.value
      console.log(userInput)
  
      const passwordInput=passwordRef.current.value
      console.log(passwordInput)


   if(userInput.length<5 && passwordInput.length<5){
      // alert("username  and password must be morethan 5 characters")
      seterrorvisible(true)
   }
   else{
      seterrorvisible(false)
      console.log("submit form")
   }
   }
   return(
    <>
    <form onSubmit={Handler} >
      <label>username</label>
      <input type="text"
      ref={usernameRef}/>
      <label>password</label>
      <input type="password"
      ref={passwordRef}/>
      {errorvisible && <span style={{color:"red"}}>username and password must be morethan 5 characters</span>}
      <button type="submit">submit</button>
    </form>
    </>
   )
}
export default UnControlledCompo;