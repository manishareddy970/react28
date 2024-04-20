
// import { useState } from "react";

 import { useState } from "react";

 const ControlledCompo2=()=>{
     const[formErr,setformErr]=useState({
         usernameErr:null,
         passwordErr:null
     })
     const[forms,setforms]=useState({
         username:null,
         password:null,
    })

    const[userdetails,setuserdetails]=useState("")
     const onchangehandler=(event)=>{
        const{value,name}=event.target
         // console.log(value,name)
        setforms(preform=>({...preform,[name]:value}))

    switch(name){
        case "username":
            if(value.length>6)
        {
           setformErr(
               {
                   ...formErr,usernameErr:"enter lessthan 6"
                }
            )
         }
         else{
            setformErr({
                ...forms,usernameErr:null
            })
         }
             break
         case "password":
             if(value.length>6){
                setformErr(
                     {
                       ...formErr,passwordErr:"enter lessthan 6"
                     }
                )
           }
           else{
            setformErr({
                ...forms,passwordErr:null
            })
         }
             break;
            default : 
   }
 }
     const submitHandler=(event)=>{
        event.preventDefault()
        console.log(forms.username)
        console.log(forms.password) 

        const userdetails={
            username:forms.username,
            password:forms.password,
            id:Math.random()
        }
        console.log(userdetails)
        setuserdetails(userdetails)
        
    }
     return(
         <>
        <form onSubmit={submitHandler}>
         <label>username</label>
            <input type="text"
            value={forms.username}
            onChange={onchangehandler}
            name="username"/>
             {formErr.usernameErr &&<span style={{color:"red"}}>invalid user name</span>}
           <label>password</label>
             <input type="password"
            value={forms.password}
         onChange={onchangehandler}
           name="password"/>
             {formErr.passwordErr &&<span style={{color:"red"}}>invalid password</span>}
           <button type="submit">submit</button>
            
            <table style={{border:"1px solid"}}>
                <tr>
                    <td style={{border:"1px solid"}}>{userdetails.username}</td>
                    <td>{userdetails.password}</td>
                </tr>
           
            </table>
           
           
             </form>
       
         </>
    )
 }
 export default ControlledCompo2;




// // const  ControlledCompo2=()=>{
// //     const [forms,setforms]=useState({
// //         username:null,
// //         password:null
// //     })
// //     const[formsErr,setformErr]=useState({
// //         usernameErr:null,
// //         passwordErr:null
// //     })

    
// //     const onchangehandler=(event)=>{
// //         const{value,name}=event.target
// //         // console.log(value,name)
// //         setforms(preforms=>({...preforms,[name]:value}))

// //         switch(name){
// //             case "username":
// //                 if(value.length>6){
// //                    setformErr({
// //                     ...formsErr,usernameErr:"enter lessthan 6"
// //                    })
// //                 }
               
// //             break;
             // case "password":
// //             //     if(value.length>6){
// //             //         setformErr({
// //             //             ...formsErr,passwordErr:"enter lessthan 6"
// //             //            })
// //             //     }
// //             //     break;
// //                 default:
// //                     
// //         }


// //     }
// //     const submithandler=(event)=>{
// //         event.preventDefault()
// //         console.log(forms.username)
// //         console.log(forms.password)

// //     }
// //     return(
// //         <>
// //         <form onSubmit={submithandler}>
// //             <label>username</label>
// //             <input type="text"
// //             value={forms.username}
// //             onChange={onchangehandler}
// //             name="username"/>
// //             {formsErr.usernameErr && <span style={{color:"red"}}>"enter lessthan 6"</span>}
// //             <label>password</label>
// //             <input type="password"
// //             value={forms.password}
// //             onChange={onchangehandler}
// //             name="password"/>
// //             {formsErr.passwordErr && <span style={{color:"red"}}>"enter lessthan 6"</span>}
// //         <button type="submit">submit</button>
// //         </form>
// //         </>
// //     )
// // }
// // export default ControlledCompo2;