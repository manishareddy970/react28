import { EmployeeData } from "./devlist"



const DevList=()=>{
    // const filterquery="react developer";
    return(
    <>
  {

    // Total data
    // EmployeeData.map((value)=>{
       

    //     return(
    //         <>
    //         <h3>{value.name}</h3>
    //         <h3>{value.designation}</h3>
    //         <h3>{value.salary}</h3>
    //         </>
            
    //     )


    // })

    EmployeeData.filter(value=>value.disignation=="react developer").map((value)=>{
        return(
            <>
            <h3>{value.name}</h3>
            <h3>{value.designation}</h3>
            <h3>{value.salary}</h3>
            </>
        )
    })
    
  }

  {
     EmployeeData.filter(value=>value.disignation=="angular developer").map((value)=>{
        return(
            <>
            <h3>{value.name}</h3>
            <h3>{value.designation}</h3>
            <h3>{value.salary}</h3>
            </>
        )
    })
    
  }


{
     EmployeeData.filter(value=>value.disignation=="python developer").map((value)=>{
        return(
            <>
            <h3>{value.name}</h3>
            <h3>{value.designation}</h3>
            <h3>{value.salary}</h3>
            </>
        )
    })

    
  }

  {
    EmployeeData.filter(value=>value.salary>10000 && value.salary<20000).map((value)=>{
      return(
        <>
        <h3>{value.name}</h3>
        <h3>{value.designation}</h3>
        <h3>{value.salary}</h3>
        </>

      )
    })
  }

{
    EmployeeData.filter(value=>value.salary>20000 && value.salary<30000).map((value)=>{
      return(
        <>
        <h3>{value.name}</h3>
        <h3>{value.designation}</h3>
        <h3>{value.salary}</h3>
        </>

      )
    })
  }
    
      
  </>
    )
}
export default DevList;