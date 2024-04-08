import { isVisible } from "@testing-library/user-event/dist/utils";
import { Component } from "react";



class Unmount extends Component{
    state={
        isVisible:true
    }
    changehandler=()=>{
        this.setState(
            {
                isVisible:!this.state.isVisible
            }
        )
    }
    render(){
        return(
            <>
            <h3>unmount example</h3>
            <button onClick={this.changehandler}>click to button remove</button>
             
             {
                this.state.isVisible? <Child/>:<h3>no child found</h3>
             }
            </>
        )
    }
}
export default Unmount;

class Child extends Component{
    componentWillUnmount(){                                   //mathod to remove element in dom  
        //clean up
        alert("componentWillUnmount")
    }
    render(){
        return(
            <>
            <h3>child visible</h3>
            </>
        )
        
    }

}