


//    export const TableRow=(props)=>{
    
//     return(
//                      <tr>
//                         <td>{props.item[0]}</td>
//                         <td>{props.item[1]}</td>
//                         <td>{props.item[2]}</td>

//                     </tr>
//     )
// }


//destruring....

export const TableRow=(props)=>{
    const{item}=props;
    return(
                     <tr>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                        <td>{item[2]}</td>

                    </tr>
    )
}



