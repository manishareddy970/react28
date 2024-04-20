
//style the productlisiting and add zoom in effect and flip card ...
import axios from "axios";
import "./style.css"
import CustomSpinner from "../../../../function_component/styling/spinner/fstspinner"
import { Component } from "react";

class NewProList extends Component{
   
    constructor(){
        console.log("constructor")
        super()
        this.state={
            products:[],
            count:1,
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
     
     delete=(index)=>{
        const del=this.state.products.filter((each,i)=>i!==index)
        this.setState({
            products:del
        })
    }
    render(){
            //  console.log(this.state.products,"log is render")
            console.log("render")
        return(
            <>
            <h3 style={{color:this.state.favoriteColor}}>product details</h3>
                {
                this.state.products.length>0
                ?
                <div  className="productlist">
                {
                this.state.products.map((eachobj,index)=>{
                    const {title,description,price,thumbnail,id}=eachobj
                        return(
                              <div className="cardlist" key={id}>
                              <h3>{id}</h3>
                              <h3>{title}</h3>
                              {/* <h6>{description}</h6> */}
                              <img src={thumbnail}  alt={title} width={200}  height={200}/>
                              <h5 style={{color:"red"}}></h5>
                              <h4>price:{price}</h4>
                                 <button onClick={()=>this.delete(index)}>delete</button>
                              </div>
                        )   
                })
                }
               </div>
               :
             <CustomSpinner/>
               }

            </>
        )
    }
}
export default NewProList;