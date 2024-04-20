import { Component } from "react";
 //perform crud on array of objects and style the content using external....
class Fruitobj extends Component{
      state={
        
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "category": "men's clothing"
            
      }

      update=()=>{

            this.setState({
                   id:this.state.id+1 
            })    
      }
      
      delete=(id)=>{
            const NEW=this.state.price.filter(i=> i!==id)
            console.log(NEW)
            this.setState({
                  price:NEW
            })
      }
     
    render(){
        return(
              <>
              <h3>{this.state.id}</h3>
              <button onClick={this.update}>update</button>
              <h3>{this.state.price}</h3>
              <button onClick={this.delete}>Delete</button>
              </>
        )
    }
}
export default Fruitobj
