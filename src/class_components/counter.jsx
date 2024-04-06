// import { Component } from "react";

import { Component } from "react";



// class Counter extends Component{
//     state={
//         count: 0
//     }
//     incrementCount=()=>{
//         this.setState(
//             {
//                 count:this.state.count+1
//             }
//         )
//     }
    
//     decrementCount=()=>{
//         if(this.state.count>0){
//         this.setState(
            
//             {
                
//                 count:this.state.count-1
                
//             }
        
//         )
//     }
//     }
//     Reset=()=>{
//         this.setState(
//             {
//                 count:0
//             }
//         )
//     }
//     render(){
//         return(
//             <>
//             <h3>Counter example</h3>
//             <h3>count{this.state.count}</h3>
//             <button onClick={this.incrementCount}>Incrementcount</button>
//             <button onClick={this.decrementCount}>Decrementcount</button>
//             <button onClick={this.Reset}>Reset</button>
//             </>
//         )
//     }
// }
// export default Counter;



class Counter extends Component{
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

    IncCount=(event)=>{
        this.setState(
            {
                count:this.state.count+event
            }
        )
    }

    IncCount=(value)=>{
        this.setState(
            {
                count:this.state.count+value
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
  
            <button onClick={()=>this.IncCount(1)}>incrementCount</button>
            <button onClick={()=>this.IncCount(10)}>incrementCount</button>
            <button onClick={this.DecCount}>decrementCount</button>

            </>
        )
    }
}
export default Counter;