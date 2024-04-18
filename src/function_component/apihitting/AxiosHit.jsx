// import { useState } from "react";

import axios from "axios"
import { useState } from "react"

// //method1
// const AxiosLoginHit=()=>{
//     const[username,setusername]=useState("")
//     const[password,setpassword]=useState("")

//     const[usernameErr,setusernameErr]=useState("")
//     const[passwordErr,setpasswordErr]=useState("")
//     const usernameHandler=(event)=>{
//         const username=event.target.value
//         setusername(username)
//         console.log(username)
//         if(username.length>5){
//             //  alert("input must be lessthan 5")
//             setusernameErr("invalid username")
//         }
//         else{
//             setusernameErr(null)
//         }
       
    
//     }
//     const passwordHandler=(event)=>{
//         const password=event.target.value
//         setpassword(password)
//         console.log(password)
//         if(password.length>5){
//             // alert("input must be lessthan 5")
//             setpasswordErr("invalid password")
//         }
//         else{
//             setpasswordErr(null)
//         }
    
//     }
//     const submitHandler=(e)=>{
//         e.preventDefault()
//         console.log(username)
//         console.log(password)
      
//     }

//     return(
//         <>
//            <form onClick={submitHandler}>
//             <label>username</label>
//             <input type="text"
//             value={username}
//             onChange={usernameHandler}
//             />
//             {usernameErr && <span style={{color:"red"}}>invalid username</span>}

//             <label>password</label>
//             <input type="password"
//             value={password}
//             onChange={passwordHandler}
//            />
//            {passwordErr &&<span style={{color:"red"}}>invalid password</span>}
//             <button type="submit">submit</button>

//            </form>
//         </>

//     )
// }
// export default AxiosLoginHit;



 const AxiosLoginHit=()=>{

    const[form,setform]=useState({
         username:null,
         password:null
     })

     const[formErr,setformErr]=useState({
        usernameErr:null,
        passwordErr:null
     })

    //  const[login,setlogin]=useState(null)


     const onchangehandler=(event)=>{
         const{value,name}=event.target
        setform(preform=>({...preform,[name]:value}))
        console.log(value,name)
        switch(name){
         case "username":
          if(value.length>5){
               setformErr(
                {
                    ...formErr,usernameErr:"invalid username"
                 }
                )
             }
             else{
                 setformErr({
                     ...formErr,usernameErr:null
                 })
             }
            break;
            case "password":
                 if(value.length>5){
                     setformErr(
                      {
                         ...formErr,passwordErr:"invalid password"
                      }
                     )
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
        
    //     const FetchData=async(userinfo)=>{
    //       const Response=await fetch('https://dummyjson.com/auth/login', {
    //            method: 'POST',
    //            headers: { 'Content-Type': 'application/json' },
    //            body: JSON.stringify(userinfo)
    //          })
    //          const Response1=await Response.json()
        
    //         if(Response1.message){
    //             alert(Response1.message)
    //         }
    //         else{
    //             alert(`welcome ${Response1.username}`)
    //         }
    //         console.log(Response1)
    //   }

        const  AxiosData=async()=>{
        //   const Response=await axios.post("https://dummyjson.com/auth/login")
          let result=await axios.post("https://dummyjson.com/auth/login")
            console.log(result)
        
            // if(Response.message){
            //     alert(Response.message)
            // }
            // else{
            //     alert(`welcome ${Response.username}`)
            // }
            // console.log(Response)
      }



    const submitHandler=(event)=>{
        event.preventDefault()
        const{username,password}=form
        console.log(username)
         console.log(password) 
     

     const userdetails={
        username:username,
        password:password,
        expiresInMins: 30
      }
      AxiosData(userdetails)
     console.log(userdetails)
    }

     return(
             <>
             <form onSubmit={submitHandler}>
               <label>username</label>
                <input type="text"
                value={form.username}
                onChange={onchangehandler}
                name={"username"}/>
                 {formErr.usernameErr && <span style={{color:"red"}}>invalid username</span>} 
                 <label>password</label>
                <input type="text"
                value={form.password}
                onChange={onchangehandler}
                name={"password"}/> 
                  {formErr.passwordErr && <span style={{color:"red"}}>invalid password</span>} 
                 <button type="submit">submit</button> 
                 
             </form>
            </>
    )
}
export default AxiosLoginHit ;


//  const AxiosLoginHit=()=>{
//      const [form,setform]=useState({
//          username:null,
//          password:null
//      })

//      const changeHandler=(event)=>{
//         const{value,name}=event.target

//         setform(preform=>({...preform,[name]:value}))
//         // console.log(value,name)
//     }

//      const submitHandler=(event)=>{
//          event.preventDefault()
//        console.log(form.username)
//         console.log(form.password)
//      }
//      return(
//          <form onSubmit={submitHandler}>
//              <label>username</label>
//              <input type="text" value={form.username} onChange={changeHandler} name="username"></input>
//             <label>password</label>
//              <input type="password" value={form.password} onChange={changeHandler} name="password"></input>
//            <button type="submit">submit</button>
//         </form>
//     )
//  }
//  export default AxiosLoginHit


