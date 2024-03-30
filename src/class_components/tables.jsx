import { Component } from "react";


class Tables extends Component{
    render(){
        return(
            <div>
                <h3>Tables by using class component</h3>
                <table border={1}>
                         
                    
                        <th>fruits</th>
                        <th>mrp</th>
                        <tr><td>1.apple</td>
                        <td>40</td></tr>
                        <tr><td>2.mango</td>
                        <td>30</td></tr>
                        <tr><td>3.banana</td>
                        <td>20</td></tr>
                        <tr><td>4.orange</td>
                        <td>50</td></tr>


                        {/* <th>mrp</th>
                        <tr><td>30</td></tr>
                        <tr><td>40</td></tr>
                        <tr><td>20</td></tr>
                        <tr><td>40</td></tr> */}
                   
                </table>
            </div>
        )
    }
}
export default  Tables;