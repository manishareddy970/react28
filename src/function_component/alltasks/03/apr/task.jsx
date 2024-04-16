import { Component } from "react";

class Fruitobj extends Component{
      state=[{
        
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "category": "men's clothing",
      }]
    render(){
        return(
              <>
              <h3>{this.state.title}</h3>
              <button>update</button>
              {/* <button>delete</button> */}
              </>
        )
    }
}
export default Fruitobj
