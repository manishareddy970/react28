


// import { Component } from "react";
// import axios from "axios";

import { Component } from "react";

  

// class ProductListing extends Component{
//     state={
//         products:[]
//     }
//     componentDidMount=()=>{
        
//         this.fetchData()
        
//     }

   

// //    fetchData=()=>{
// //     fetch("https://dummyjson.com/products")
// //     .then(response=>response.json())
// //     .then(response=>console.log(response))
// //    }



//     //   fetchData=async()=>{
//     //      let result=await fetch("https://dummyjson.com/products")
//     //      let result1=await result.json()
//     //      console.log(result1)
//     //   }

    
//     fetchData=async()=>{
//         let result=await axios.get("https://dummyjson.com/products")
//         // console.log(result)

//        this.setState({
//         products:result.data.products
//        })
//     }
//     render(){
//         console.log(this.state.products,"log from render")
//         return(
//                <>
//                <h3>product listing</h3>
              
//                {
//                 this.state.products.length>0
//                 ?
//                 <>
//                 {
//                     this.state.products.map(eachobj=>{
//                         return(
//                             <>
//                             <h3>{eachobj.title}</h3>
//                             </>
//                         )
//                     })
//                 }
//                 </>
//                 :
//                 <h3>no product</h3>
//                }

//                </>
//         )
//     }
// }
// export default ProductListing;


// import axios from "axios";
// import CustomSpinner from "../../function_component/styling/spinner/fstspinner";
// import "./styling.css"

// class ProductListing extends Component{
//     state={
//         products:[]
//     }

   
//     componentDidMount=()=>{
//         this.AxiosData()
//     }
//     AxiosData=async()=>{
//        let result=await axios.get("https://dummyjson.com/products")
//        console.log(result)
//        this.setState({
//         products:result.data.products
//        })
//     }
//     render(){
//              console.log(this.state.products,"log is render")
//         return(

//             <>
//             <h3>product listing</h3>
//             {
//                 this.state.products.length>0
//                 ?
//                 <div  className="productlist">
//                 {
//                 this.state.products.map(eachobj=>{
//                     const {title,description,price,thumbnail}=eachobj
//                         return(
//                               <div className="cardlist">

//                               {/* <h3>{eachobj.title}</h3>
//                               <h3>{eachobj.description}</h3>
//                               <h3>{eachobj.price}</h3> */}

//                               <h3>{title}</h3>
//                               <h4>{description}</h4>
//                               <img src={thumbnail}  alt={title} width={200}  height={200}/>
//                               <h5 style={{color:"red"}}>{price}</h5>
//                               </div>
//                         )
//                 })
//                 }
//                </div>
//                :
//                <CustomSpinner/>
//             }

//             </>
//         )
//     }
// }
// export default ProductListing;



import axios from "axios";
import "./styling.css"
import CustomSpinner from "../../../function_component/styling/spinner/fstspinner";

class ProductListing extends Component{
    // state={
    //     products:[]
    // }

    constructor(){
        console.log("constructor")
        super()
        this.state={
            products:[],
            favoriteColor:"green"
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
        // console.log(props)
        return{favoriteColor:props.favcol}
        
    }
   
    componentDidMount=()=>{
        document.title="hello world"
        console.log("componentDidMount")

        this.AxiosData()
    }
    AxiosData=async()=>{
       let result=await axios.get("https://dummyjson.com/products")
       console.log(result)
       this.setState({
        products:result.data.products
       })
    }
    render(){
            //  console.log(this.state.products,"log is render")
            console.log("render")
        return(

            <>
            <h3 style={{color:this.state.favoriteColor}}>product listing</h3>
            {
                this.state.products.length>0
                ?
                <div  className="productlist">
                {
                this.state.products.map(eachobj=>{
                    const {title,description,price,thumbnail,id}=eachobj
                        return(
                              <div className="cardlist" key={id}>
                              <h3>{title}</h3>
                              <h4>{description}</h4>
                              <img src={thumbnail}  alt={title} width={200}  height={200}/>
                              <h5 style={{color:"red"}}>{price}</h5>
                              </div>
                        )
                })
                }
               </div>
               :
            //    <CustomSpinner/>
            <CustomSpinner/>
            }

            </>
        )
    }
}
export default ProductListing;