import { useState } from "react";


const Singlestate=()=>{
    const[form,setform]=useState({
        username:null,
        password:null
    })

    const[formErr,setformErr]=useState({
        usernameErr:null,
        passwordErr:null
    })
    

    const onchangehandler=(event)=>{
       const{value,name}=event.target
       setform(preform=>({...preform,[name]:value}))
           
       switch(name){
        case "username":
            if(value.length<5){
                setformErr({...formErr,usernameErr:"invalid username"})
            }
            break;
        case "password":
            if(value.length<5){
                setformErr({...formErr,passwordErr:"invalid password"})
            }
            break;
            default:
            
       }
    }
    const SubmitHandler=(e)=>{
        e.preventDefault()
        const{username,password} =form
        console.log(username)   
        console.log(password)      
        
    }
    return(
        <>
        <h3 style={{textAlign:"center"}}>Registration Form</h3><br/>
        <form onSubmit={SubmitHandler}>
        <label style={{marginLeft:"640px",fontSize:"20px"}}>username:</label>
        <input type="text"
        value={form.username}
        onChange={onchangehandler}
        name="username"/>
         {
            formErr.usernameErr &&<span style={{color:"red"}}>invalid username</span>
        }<br/><br/>
        <label style={{marginLeft:"640px",fontSize:"20px"}}>password:</label>
        <input type="password"
        value={form.password}
        onChange={onchangehandler}
        name="password"/>
        {
            formErr.passwordErr &&<span style={{color:"red"}}>invalid password</span>
        }<br/><br/>
        <button type="submit" style={{marginLeft:"750px",fontSize:"20px"}}>submit</button>
       
        </form>
        </>
    )
}
export default Singlestate;