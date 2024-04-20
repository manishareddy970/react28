import { useState } from "react";

const ControlledCompo=()=>{
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")

    const [usernameError,setusernameError]=useState(null)
    const [passwordError,setpasswordError]=useState(null)

    const usernameHandler=(event)=>{
        const username=event.target.value
        console.log(username)
        setusername(username)
        if(username.trim().length>6){
            // alert("input must be length 6")
            setusernameError("input must be length 6")
         }
         else{
          setusernameError(null)
        }
        //  console.log(username)
    }
    const passwordHandler=(event)=>{
        const password=event.target.value
        console.log(password)
        setpassword(password)
        if(password.trim().length>6){
            setpasswordError("input must be length 6")
        }
        else{
            setpasswordError(null)
        }
    }
    const submitHandler=(event)=>{
        event.preventDefault()
        console.log(username)
        console.log(password)

        const userdetails={
            username:username,
            password:password,
            id:Math.random()
        }
        console.log(userdetails)
    }
    return(
        <>
        <form onSubmit={submitHandler}>
        <label>username</label>
            <input type="text"
            value={username}
            onChange={usernameHandler}/>
            {usernameError &&<span style={{color:"red"}}>invalid user name</span>}
           <label>password</label>
            <input type="password"
            value={password}
            onChange={passwordHandler}/>
             {passwordError &&<span style={{color:"red"}}>invalid password</span>}
             <table style={{border:"1px solid"}}>
                <tr>
                <td style={{border:"1px solid"}}>{username}</td> 
                <td>{password}</td>
                </tr>
            </table>
            <button type="submit">submit</button>
            </form>
        </>
    )
}
export default ControlledCompo;