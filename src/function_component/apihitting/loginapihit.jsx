

// import { useState } from "react";

import { useState } from "react"

//  const LoginApi=()=>{
//   const[login,setlogin]=useState(false)

//   const [data,setdata]=useState(null)

//      const[formErr,setformErr]=useState({
//          usernameErr:null,
//          passwordErr:null
//      })
//      const[forms,setforms]=useState({
//          username:null,
//          password:null
//     })

//      const onchangehandler=(event)=>{
//         const{value,name}=event.target
//         //  console.log(value,name)
//         setforms(preform=>({...preform,[name]:value}))

//     switch(name){
//         case "username":
//             if(value.length>6)
//         {
//            setformErr(
//                {
//                    ...formErr,usernameError:"enter lessthan 6"
//                 }
//             )
//          }
//          else{
//             setformErr({
//                 ...forms,usernameError:null
//             })
//          }
//              break
//          case "password":
//              if(value.length>6){
//                 setformErr(
//                      {
//                        ...formErr,passwordError:"enter lessthan 6"
//                      }
//                 )
//            }
//            else{
//             setformErr({
//                 ...forms,passwordError:null
//             })
//          }
//              break;
//             default : 
//    }
//  }

//  const LoginHitApi=async(userinfo)=>{
//   const result= await fetch('https://dummyjson.com/auth/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(userinfo)
//   })
//   const result1=await result.json()
//   if(result1.message){
//     setlogin(false)
//     alert(result1.message)
//   }
//   else{
//     setlogin(true)
//     alert(`welcome ${result1.username}`)
//     setdata(result1)
//   }
//   console.log(result1)

//  }


//      const submitHandler=(event)=>{
//         event.preventDefault()
//         const{username,password}=forms
//         console.log(username)
//         console.log(password)

//         const userdetails={
//           username:username,
//           password:password,
//           expiresInMins: 30
          
//       }
//       LoginHitApi(userdetails)
//       console.log(userdetails)
         
//     }

//      return(
//          <>
//         <form onSubmit={submitHandler}>
//          <label>username</label>
//             <input type="text"
//             value={forms.username}
//             onChange={onchangehandler}
//             name="username"/>
//              {formErr.usernameErr &&<span style={{color:"red"}}>invalid user name</span>}
//            <label>password</label>
//              <input type="password"
//             value={forms.password}
//          onChange={onchangehandler}
//            name="password"/>
//              {formErr.passwordErr &&<span style={{color:"red"}}>invalid password</span>}
            
//            <button type="submit">submit</button>

//            {
//             login 
//             &&
//             <h4>welcome user ${data.username}</h4>
            
//             }
//              </form>
       
//          </>
//     )
//  }
//  export default LoginApi;


const LoginApi=()=>{

  const [login,setlogin]=useState(false)
  const [data,setdata]=useState(null)
  
  const [forms,setforms]=useState({
    username:null,
    password:null
  })

  const [formsErr,setformsErr]=useState({
    usernameErr:null,
    passwordErr:null
  })

  const onchangehandler=(event)=>{
    const {value,name}=event.target
    // console.log(value,name)
    setforms(preforms=>({...preforms,[name]:value}))

    switch(name){
      case "username":
        if(value.length>6){
          setformsErr({
            ...formsErr,usernameErr:"enter lessthan 6"
          })
        }
        else{
          setformsErr({
            ...formsErr,usernameErr:null
          })
          
        }
        break;
        case "password":
          if(value.length>6){
            setformsErr({
              ...formsErr,passwordErr:"enter lessthan 6"
            })
          }
          else{
            setformsErr({
              ...formsErr,passwordErr:null
            })
            
          }
          break;
          default:
            
    }

  }


  const LoginHitApi=async(userinfo)=>{
    const result=await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userinfo)
    })
    const result1=await result.json()

    if(result1.message){
      setlogin(false)
      alert(result1.message)
    }
    else{
      setlogin(true)
      alert(`welocome ${result1.username}`)
      setdata(result1)
    }
    console.log(result1)
  }

  

  const submitHandler=(e)=>{
    e.preventDefault()
    const{username,password}=forms
    console.log(username)
    console.log(password)

    const userdetails={
      username:username,
      password:password,
      expiresInMins: 30
    }
    LoginHitApi(userdetails)
   console.log(userdetails)
      
  }

  return(
    <>
    <form onSubmit={submitHandler}>
      <label>username</label>
      <input type="text"
      value={forms.username}
      onChange={onchangehandler}
      name="username"/>
      {formsErr.usernameErr && <span style={{color:"red"}}>invalid username</span>}
      <label>password</label>
      <input type="text"
      value={forms.password}
      onChange={onchangehandler}
      name="password"/>
      {formsErr.passwordErr && <span style={{color:"red"}}>invalid password</span>}
      <button type="submit">submit</button>
      {
        login 
        &&
        <h1>welcome ${data.username}</h1>
      }
    </form>
    </>
  )
}
export default LoginApi