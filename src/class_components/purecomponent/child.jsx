import { Component, PureComponent} from "react";




// class Childcompo extends Component{
//     render(){
//         console.log("rendering child")
//         return(
//             <div>
//                 <h3>child component</h3>
//             </div>
//         )
//     }
// }
// export default Childcompo;


// pureComponent         //stop rendreing in child

class Childcompo extends PureComponent{
    render(){
        console.log("rendering child")
        return(
            <div>
                <h3>child component</h3>
            </div>
        )
    }
}
export default Childcompo;