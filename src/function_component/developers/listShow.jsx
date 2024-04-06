import { employee } from "./list";


const ListShow=()=>{

    const filterquery="react developer"
    return(
        <>
       
{
       
        employee.filter(val=>val.disignation== filterquery).map(val=>
            <>
            <h3>name:{val.name}</h3>
            <h3>disignation:{val.disignation}</h3>
            <h3>salary:{val.salary}</h3>
            </>
               )

}
        </>
    )
}
export default ListShow;