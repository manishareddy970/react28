

// import { useContext } from "react"
// import { Link } from "react-router-dom"
// import { DataShare } from "./navigation"

import { Link } from "react-router-dom"


const PravaliHeader=()=>{
    // const{city}=useContext(DataShare)

    // const{data,cartitems}=useContext(DataShare)
    return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
           
           <Link to={"/"} style={{textDecoration:"none",color:"black"}}>home</Link>
          
            {/* <Link to={"/contact"} style={{textDecoration:"none",color:"black",marginLeft:"50px"}}>{data.name}</Link> */}

            <Link to={"/contact"} style={{textDecoration:"none",color:"black",marginLeft:"50px"}}>contact</Link>

            {/* <Link to={"/cartscreen"} style={{textDecoration:"none",color:"black",marginLeft:"50px"}}>cartlist {cartitems.length}</Link> */}

            <Link to={"/cartscreen"} style={{textDecoration:"none",color:"black",marginLeft:"50px"}}>cartlist </Link>

          
           
          </ul>
        </div>
      </nav>
      

    )
}
export default PravaliHeader
