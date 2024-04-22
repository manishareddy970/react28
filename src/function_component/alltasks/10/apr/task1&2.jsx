

//show the user inputs using uncontrolled and show the  regestration details in a table;
import { useRef, useState } from "react";

const UnControlled=()=>{
    const username=useRef("")
    const password=useRef("")

    const [errorvisible,seterrorvisible]=useState(false)
    const [UserInput,setuserInput]=useState("")
    const [PasswordInput,setPasswordInput]=useState("")

    const SubmitHandler=(e)=>{
        e.preventDefault()
        
       const UserInput=username.current.value
       console.log(UserInput)
       setuserInput(UserInput)

       const PasswordInput=password.current.value
       console.log(PasswordInput)
       setPasswordInput(PasswordInput)
       
       if(UserInput.length<5 && PasswordInput.length<5){
        seterrorvisible(true)
       }
       else{
        seterrorvisible(false)
       }
    }
    return(
        <>
        <h2 style={{textAlign:"center"}}>Registration Form</h2><br/>
        <form onSubmit={SubmitHandler}>
            <label style={{marginLeft:"640px",fontSize:"20px"}}>username:</label>
            <input type="text"
            ref={username}/><br/><br/>
            <label style={{marginLeft:"640px",fontSize:"20px"}}>password:</label>
            <input type="password"
            ref={password}/><br/>
            {
                errorvisible && <span style={{color:"red",marginLeft:"650px"}}>invalid username and invalid password</span>
            }<br/>
            <button style={{marginLeft:"750px",fontSize:"20px"}} type="submit"> submit</button>
            <h3 style={{marginLeft:"660px"}}>Userdetails In Table </h3>
            <table style={{border:"1px solid black",marginLeft:"730px"}}>
                <tr>
                <td style={{border:"1px solid black",fontSize:"20px"}}>username</td>
                    <td style={{border:"1px solid black",fontSize:"20px"}}>password</td>
                    
                </tr>
                <tr>
                <td style={{border:"1px solid black",fontSize:"20px"}}>{UserInput}</td>
                    <td style={{border:"1px solid black",fontSize:"20px"}}>{PasswordInput}</td>
                </tr>
            </table>
        </form>
        

        </>
    )
}
export default UnControlled;