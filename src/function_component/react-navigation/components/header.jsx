import { Link } from "react-router-dom";



const Header=()=>{
    return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item" style={{margin:20}}>

              <Link to={"/"} style={{textDecoration:"none",color:"black"}}>Home</Link>
            </li>
            <li className="nav-item" style={{margin:20}}>

                <Link to={"/contact"} style={{textDecoration:"none",color:"black"}}>Contact</Link>
              {/* <a className="nav-link" href="#">
                Link
              </a> */}
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