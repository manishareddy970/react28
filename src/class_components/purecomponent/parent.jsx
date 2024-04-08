
import { Component } from "react";
import Childcompo from "./child";

class Parentcompo extends Component{
    state={
        count:0
    }
    incCount=()=>{
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }
    DecCount=()=>{
        if(this.state.count>0){
        this.setState(
            {
                count:this.state.count-1
            }
        )
    }
    }
    
    render(){
        return(
            <>
            <h3>count ex</h3>
            <h3>count{this.state.count}</h3>
            <button onClick={this.incCount}>incrementCount</button>
            <button onClick={this.DecCount}>decrementCount</button>
            <Childcompo count={this.state.count}/>
            </>
        )
    }
}
export default Parentcompo;