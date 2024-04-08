
import { Component } from "react";

import axios from "axios"

class UpdatingCounter extends Component{
    state={
        count: 0
    }
    incrementCount=()=>{
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }
    
    decrementCount=()=>{
        if(this.state.count>0){
        this.setState(
            
            {
                count:this.state.count-1
                
            }
        
        )
    }
    }
    Reset=()=>{
        this.setState(
            {
                count:0
            }
        )
    }


    static getDerivedStateFromProps(props, state){        //method2
        console.log("getDerivedStateFromProps")
        // console.log(props)
        return null
        
    }
    // shouldComponentUpdate(){
    //     return false
    // }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")              //method3
        return true
    }
    
     componentDidMount(){
        document.title=`React app ${this.state.count}`
     }

    componentDidUpdate(){                                   //method4
        document.title=`React app ${this.state.count}`
        this.axiosData()
    }

    axiosData=async()=>{                                   //api calls
        const result =await axios.get("https://dummyjson.com/products")
    }
     
    getSnapshotBeforeUpdate(props,state){                  //method5
        console.log(state)
        return null

    }


    render(){
        console.log("render")            //render method 1
        return(
            <>
            <h3>Counter example</h3>
            <h3>count{this.state.count}</h3>
            <button onClick={this.incrementCount}>Incrementcount</button>
            <button onClick={this.decrementCount}>Decrementcount</button>
            <button onClick={this.Reset}>Reset</button>
            </>
        )
    }
}
export default  UpdatingCounter;