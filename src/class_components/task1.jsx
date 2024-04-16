// import { Component } from "react";

import { Component, useState } from "react";

// class Practice extends Component{
//     state={
//     product:"real me",
//     price:20000
//     }
//      update=()=>{
//         this.setState({
//             price:this.state.price

//         })
//     }
     
//     render(){
//         return(
//             <>
//             <h3>product:{this.state.product}</h3>
//             <h3>price:{this.state.price}</h3>
//             <input id='price' type='number'/>
//             <button onClick={()=>{
//                 let p=document.getElementById("price").value;
//                 console.log(p)
//                 this.state.price=p;
//                 console.log(this.state)
//             }
//             }>update</button>
            
//             </>
//         )
//     }
// }
// export default Practice;


//     class Practice extends Component{
//     state={
//     product:"realme",
//     price:20000
//     }
//     update=()=>{
//         let p=document.getElementById("price").value
//                 console.log(p)
//                 // this.state.price=p;
//                 // console.log(this.state)
//                 this.setState({
//                     price:p
//                 })
//     }
//     render(){
//         return(
//               <>
//               <h3>{this.state.product}</h3>
//               <h3>{this.state.price}</h3>
//               <input id="price"type="number"/>
//               <button onClick={this.update}>update</button>
//               </>   
//         )
//     }
// }
// export default Practice;


// const Practice=()=>{
//  const[price,setprice]=useState(5000)
//   const update=()=>{
//     // setprice(preprice=>preprice+10)
//     setprice(price+10)
//  }
//     return(
//            <>
//            <h3>{price}</h3>
//            <button onClick={update}>update</button>
           
//            </>
//     )
// }
// export default Practice;


// class Practice extends Component{
//     state={
//         products:"realme",
//         price:20000
//     }
//     update=()=>{
//         this.setState({
//             price:this.state.price+1
//         })
//     }
//     render(){
//         return(
//             <> 
//             <h3>{this.state.price}</h3>
//             <button onClick={this.update}>update</button>
//             </>
//         )
//     }
// }
// export default Practice



class Practice extends Component{
    state={
        count:10
    }
    countdown=()=>{
        if(this.state.count>0){
        this.setState({
                count:this.state.count-1
            
        })
        }
    }
    render(){
        return(
                <>

                <h3>counter example</h3>
                <h3>{this.state.count}</h3>
                <button onClick={this.countdown}>start countdown</button>
                </>
        )
    }
}
export default Practice;


