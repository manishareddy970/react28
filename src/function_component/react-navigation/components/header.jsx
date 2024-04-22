import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataShare } from "../navigation-stack";
import { Data } from "../../alltasks/15/apr/apr/navigate";



const Header=()=>{
  // const {city}=useContext(DataShare)
    // const {data}=useContext(DataShare)
    const{CartItems} =useContext(Data)
    return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item" style={{margin:20}}>

              <Link to={"/"} style={{textDecoration:"none",color:"black"}}>HOME</Link>
            </li>
            <li className="nav-item" style={{margin:20}}>

                {/* <Link to={"/contact"} style={{textDecoration:"none",color:"black"}}>{city}</Link> */}
                {/* <Link to={"/contact"} style={{textDecoration:"none",color:"black"}}>{data.name}</Link> */}
              {/* <a className="nav-link" href="#">
                Link
              </a> */}
              {/* <Link to={"/contact"} style={{textDecoration:"none",color:"black"}}>Contact</Link> */}

            </li>
            <li className="nav-item" style={{margin:20}}>
            <Link to={"/cart"} style={{textDecoration:"none",color:"black"}}>Cart {CartItems.length}</Link>
            </li>

            <li className="nav-item">
            </li>
            <li className="nav-item">
             
            </li>
          </ul>
        </div>
      </nav>
        

    )
}
export default Header;