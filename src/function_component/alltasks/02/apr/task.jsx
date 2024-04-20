// import { Component } from "react";

import { Component } from "react";
//adding fruit...

 //crud on using array 
// class Fruits extends Component{
//     state={
//         fruitsss:["apple","banana"]
//     }
//     addingfruit=()=>{
//         let add=document.getElementById("f").value
//         const newfruit=[...this.state.fruitsss,add]
//         this.setState({
//             fruitsss:newfruit
//         })
        
//     }
//     render(){
//         return(
//          <>
//          <h3>fruits magic</h3>
//          {/* <h3>{this.state.fruitsss}</h3> */}
//          <input id="f" type="text"/>
//          <button onClick={this.addingfruit}>add fruit</button>
//          <ol>
//          {
//            this.state.fruitsss.map((eachfruit=>{
//             return(
//                 <li>
//                 {eachfruit}
//                 </li>
//             )
//            }))
//          }
//          </ol>
//          </>
//         )
//     }
// }
// export default Fruits;


//delete fruits....   
//update fruits...

class Fruits extends Component{
    state={
        fruitss:["apple","orange"]
    }
    deletefruit=(index)=>{
        console.log(index)
        const del=this.state.fruitss.filter((eachfruit,i)=>i!==index)
        console.log(del)
        this.setState({
            fruitss:del
        })
    }

    update=(index)=>{
        const upd=this.state.fruitss.map((eachfruit,i)=>{
            if(i==index){
                return "pineapple"
            }
            else{
                return eachfruit
            }
        })
        this.setState({
            fruitss:upd
        })
        console.log(upd)
    }
    render(){
        return(
           <>
           <h3>delete fruits</h3>
           {/* <h3>{this.state.fruitss}</h3> */}
           <ol>{
                     this.state.fruitss.map((eachfruit,index)=>{
                        return(
                            <>
                            <li>
                                {eachfruit}
                            </li>
                            <button onClick={()=>this.deletefruit(index)}>delete</button>
                            <button onClick={()=>this.update(index)}>update</button>
                            </>  
                        )
                     })
                     
                    }
           </ol>
           </>
        )
    }
}
export default Fruits;
