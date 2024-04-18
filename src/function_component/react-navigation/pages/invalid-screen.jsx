import { Link, useNavigate } from "react-router-dom";



const InvalidScreen=()=>{
    const navigate=useNavigate()

    const NavigateToHome=()=>{

        const loginsuccess=true
        if(loginsuccess){
            navigate("/")
        }
        else{
            console.log("hello")
        }
    }

    
    return(
          <>
          <h4>Invalid screen</h4>
          <button onClick={NavigateToHome}>Back to Home</button>
          {/* <Link to={NavigateToHome}>Back to Home</Link> */}
          </>
    )
}
export default InvalidScreen;