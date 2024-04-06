

// const TableComponent=()=>{
//     return(

import { ArrayOfObjects } from "./data";
import { TableRow } from "./tablerow";
// import { TableRow } from "./tablerow";



        
//         <table style={{ width: "100%" }}>
//         <tbody>
//           <tr>
//             <th>Company</th>
//             <th>Contact</th>
//             <th>Country</th>
//           </tr>
//           <tr>
//             <td>Alfreds Futterkiste</td>
//             <td>Maria Anders</td>
//             <td>Germany</td>
//           </tr>
//           <tr>
//             <td>Centro comercial Moctezuma</td>
//             <td>Francisco Chang</td>
//             <td>Mexico</td>
//           </tr>
//           <tr>
//             <td>Alfreds Futterkiste</td>
//             <td>Maria Anders</td>
//             <td>Germany</td>
//           </tr>
//           <tr>
//             <td>Centro comercial Moctezuma</td>
//             <td>Francisco Chang</td>
//             <td>Mexico</td>
//           </tr>
//         </tbody>
//       </table>
      
//     )
// }
// export default TableComponent;



 //using map....


// const TableComponent=()=>{
//     return(
        
//         <table style={{ width: "100%" }}>
//         <tbody>
//           <tr>
//             <th>Company</th>
//             <th>Contact</th>
//             <th>Country</th>
//           </tr>
//           {
//            ArrayOfObjects.map((eacharray)=>{
//                 return(
//                     <tr>
//                         <td>{eacharray[0]}</td>
//                         <td>{eacharray[1]}</td>
//                         <td>{eacharray[2]}</td>

//                     </tr>
//                 )

                   
//                 })
                
//           }
//         </tbody>
//       </table>
      
//     )
// }
// export default TableComponent;


//general prop....

// const TableComponent=()=>{
//     return(
//         <table style={{ width: "100%" }}>
//                  <tbody>
//                    <tr>
//                     <th>Company</th>
//                     <th>Contact</th>
//                    <th>Country</th>
//                   </tr>

//         {
//             ArrayOfObjects.map((eacharray)=>{
//                 return(
//                     <TableRow item={eacharray}/>
//                 )
//                 })
            
//         }
//                   </tbody>
//      </table>
//     )
// }
// export default TableComponent;


