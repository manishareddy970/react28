import { Component } from "react";




class Forms extends Component{
    render(){
        return(
            <>
            <h3>Forms by using class component</h3>

            <form>
            <input type="text" placeholder="username"/><br/>
            <input type="text" placeholder="password"/><br/>
            <input type="text" placeholder="email"/><br/>
            <input type="submit"/>
            </form>
            </>
        )
    }
}
export default Forms;