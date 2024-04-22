import axios from "axios";
import { useState } from "react";

const AxiosPost=()=>{
    const [form,setform]=useState({
        username:null,
        password:null
    })
    const [formErr,setformErr]=useState({
        usernameErr:null,
        passwordErr:null
    })
    const[login,setlogin]=useState(false)

    const onchangehandler=(event)=>{
        const {value,name}=event.target
        setform(preform=>({...preform,[name]:value}))
       
        switch(name){
            case "username":
              if(value.length>6){
                setformErr({
                  ...formErr,usernameErr:"enter lessthan 6"
                })
              }
              else{
                setformErr({
                  ...formErr,usernameErr:null
                })
                
              }
              break;
              case "password":
                if(value.length>6){
                  setformErr({
                    ...formErr,passwordErr:"enter lessthan 6"
                  })
                }
                else{
                  setformErr({
                    ...formErr,passwordErr:null
                  })
                  
                }
                break;
                default:
                  
          }
    
    }
    const AxiosHitPost=async()=>{
        const Response=await axios.post("https://dummyjson.com/auth/login")
        console.log(Response)

        if(Response.message){
            setlogin(false)
            alert(Response.message)
            
        }
        else{
            setlogin(true)
            alert(`welcome to ${Response.username}`)
        }
    }
    
    const submitHandler=(e)=>{
        e.preventDefault()
        const{username,password}=form
        console.log(username)
        console.log(password)
        AxiosHitPost()
    }

    return(
         <form onSubmit={submitHandler}>
            <label>username</label>
            <input type="text"
            value={form.username}
            onChange={onchangehandler}
            name="username"/>
            {formErr.usernameErr && <span style={{color:"red"}}>invalid username</span>}
            <label>password</label>
            <input type="password"
            value={form.password}
            onChange={onchangehandler}
            name="password"/>
            {formErr.passwordErr && <span style={{color:"red"}}>invalid password</span>}
           <button type="submit">submit</button>
         </form>
    )
}
export default AxiosPost;


