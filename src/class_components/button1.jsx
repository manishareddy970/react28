

// import { Component } from "react";
// import Counter from "./counter";

import { Component } from "react";



// class Button extends Component{
    
//     render(){
//         return(
            
//             <div>
//                 <h3>button by using class component</h3>
//                 <button>Sign up</button>
//             </div>
//         )
//     }
// }
// export default Button;





// class Button extends Component{
//     state={
//         issubscribe:false,
//         text1:"subscribe",
//         text2:"subscribed"

//     }

//     changesubscribe=()=>{
//         console.log("clickme")
    

//     this.setState(
//         {
//             // issubscribe:true
//             issubscribe: !this.state.issubscribe
//         }

//        )
//     }

//     render(){
//         return(
//             <>
//            {/* <button>{this.state.text1}</button> */}

//            {/* <button>{this.state.issubscribe?this.state.text2:this.state.text1}</button> */}

//            <button style ={{color:this.state.issubscribe ?"red":"green"}} onClick={this.changesubscribe}>{this.state.issubscribe?this.state.text2:this.state.text1}</button>
//            {

//               this.state.issubscribe
//               ?
//               <>
//               <h3>welcome user</h3>
            
//               <Counter/>
//               </>
              
//               :
//               <h3>please subscribe to see the content</h3>

//             }
         
//             </>
//         )
//     }
// }
// export default Button;





    //adding new fruit...

//     import { Component } from "react";

// class Button extends Component{
//     state={
        
//         fruits:["apple","orange"]
       
//     }
   

//     addfruit=()=>{
//       const newfruits=[...this.state.fruits,"new fruit"]
//       console.log(newfruits)
//       this.setState(
//         {
//           fruits:newfruits
//         }
//       )
//     }
//      render(){
//       return(
//         <ol>
//           {
//         this.state.fruits.map((eachobj)=>{
//           return(
//             <>
//             <li>
//               {eachobj}
//             </li>
//             <button onClick={this.addfruit}>Addfruit</button>
//             </>
//           )

//         })
//       }
//         </ol>
        
      
        
//       )
//      }


   
//   }
//   export default Button;



//delete fruitsss


// import { Component } from "react";



// class Button extends Component{
//   state={
      
//       fruits:["apple","orange","banana","watermelon"]
     
//   }
//   deletefruit=(index)=>{
//     console.log(index)
//     const newfruit=this.state.fruits.filter((eachfruits,i)=>i!==index)
//       console.log(newfruit)
//       this.setState(
//               {
//                 fruits:newfruit
//               }
//       )
    
//   }
  
  
//   render(){
//     return(
//       <>
//       <ol>
//         {
//           this.state.fruits.map((eachobj,index)=>{
//             return(
//               <>
//               <li>
//                 {eachobj}
//               </li>
                  
//               <button onClick={()=>this.deletefruit(index)}>delete</button>
//               </>
//             )
//           })
//         }
//       </ol>
//       </>
//     )
      
//   }

 
  

// }
// export default Button;



//upadte fruits

class Button extends Component{
  state={
    friuts:["apple","banana","watermelon"]
  }

  updatefruit=(index)=>{
    const up=this.state.friuts.map((eachobj,i)=>{
      if(i==index){
        return "pineapple"
      }
      else{
        return eachobj
      }
    })
    console.log(up)

       this.setState(
        {
          friuts:up
        }
       )

  }
  render(){
    return(
      <ol>
        {
          this.state.friuts.map((eachobj,index)=>{
            return(
              <>
              <li>
                {eachobj}
              </li>
              <button onClick={()=>this.updatefruit(index)}>update fruit</button>
              </>
            )
          })
        }
      </ol>
    )
  }
}
export default Button;