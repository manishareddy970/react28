import { Component } from "react";
import axios from "axios";
import "./styles.css";
import Spinner2 from "../../../styling/spinner/thrspinner";


class ProductsData extends Component{
    // state={
    //    count:0
    // }

    constructor(){
        console.log("constructor")
        super()
        this.state={
            products:[],
            count:0,
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
    
    
    HighToLow=()=>{
        const result=this.state.products.sort((a,b)=>b.price-a.price)
        this.setState(
            {
                products:result
            }
        )
    }

    LowToHigh=()=>{
        const result=this.state.products.sort((a,b)=>a.price-b.price)
        this.setState(
            {
                products:result
            }  
        )
    }


    Between=()=>{
        const result=this.state.products.filter(eachobj=>eachobj.price>=500 && eachobj.price<1000)
        this.setState(
            {
                products:result
            }
        )

    }
    render(){
            //  console.log(this.state.products,"log is render")
            console.log("render")
        return(
            <>
            <button onClick={this.HighToLow} style={{marginLeft:"600px"}}>High To Low</button>
            <button onClick={this.Between}>Between 500 To 1000</button>
            <button onClick={this.LowToHigh}> Low To High</button>
           
                {
                this.state.products.length>0
                ?
                <div  className="productlist">
                {
                this.state.products.map((eachobj)=>{
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
           <Spinner2/>
               }

            </>
        )
    }
}
export default ProductsData;;