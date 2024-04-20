import { useContext } from "react";
import Header from "../components/header";
import { DataShare } from "../navigation-stack";
import UseReducerEx from "../../Hooks/usereducerex";

const Contact=()=>{
    const {data,ChangeData}=useContext(DataShare)
    return(
          <>
          <Header/>
          <h3>UseContext Example:</h3>
          <h4>Welcome to contact screen {data.count}</h4>
          <button onClick={ChangeData}>click to increase count</button>
          <UseReducerEx/>
          </>
    )
}
export default Contact;