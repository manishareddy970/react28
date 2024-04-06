import CustomSpinner from "../spinner/fstspinner";
import Spiner from "../spinner/secspinner";
import Spinner2 from "../spinner/thrspinner";
import CustomCard from "./reactbootastrap/card";




const FirstPage=()=>{
    return(
        <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
        <CustomCard 

        ImageUrl= {"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
        name={"radika"} description={"Some quick example text to build on the card title and make up thebulk of the card's content"} spinner={CustomSpinner }/>
      </div>
      <div className="col-sm-4">
      <CustomCard 
      ImageUrl={"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"}
      name={"tillu"} description={"Some quick example text to build on the card title and make up thebulk of the card's content"}
      spinner={Spiner}/>
      </div>
      <div className="col-sm-4">
      <CustomCard 
      ImageUrl={"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"}
      name={"lalli"} description={"Some quick example text to build on the card title and make up thebulk of the card's content"}
      spinner={Spinner2}/>
      </div>
    </div>
  </div>
</>

    )
}
export default FirstPage;