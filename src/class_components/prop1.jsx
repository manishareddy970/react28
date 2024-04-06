// import ListItems from "./prop2";





// const ListComponent=()=>{

//     return(
//         <div>
//             <ol>
//                <ListItems/>
//             </ol>
//         </div>
//     )
// }
// export default ListComponent;



// import ListItems from "./prop2";



// const ListComponent=()=>{
//     const ListItems=["apple","orange","banana"]
    
//     return(
//         <div>
//             <ol>
//                {
//                 ListItems.map((eachele)=>{
//                     return(
//                         <li>{eachele}</li>
//                     )
//                 })
//                }
//             </ol>
//         </div>
//     )
// }
// export default ListComponent;

   //using map to iterate array objects

// const ListComponent=()=>{
//     const listitems=[
//         {
//             id:1,
//             name:"apple",
//             type:"fruit",
//             isfruit:true
           
//         },
//         {
//             id:2,
//             name:"potato",
//             type:"vegetable",
//             isfruit:false
//         },
//         {
//             id:3,
//             name:"orange",
//             type:"fruit",
//             isfruit:true
//         }
//     ]
//    return(
//     <>
//     <ol>
//         {
//             listitems.map((eachobject)=>{
//                 return(
//                     <li>{eachobject.name}</li>
//                 )
//             })
//         }
//     </ol>
//     </>
//    )
//     }
// export default ListComponent;


//using props to iterate an array objects

// import Image1 from "./image1"

// import ListItems from "./prop2"
// import Image1 from "./image1"
import Img from "./prop2"
const ListComponent=()=>{
      const listitems=[
        {
            name:"apple",
            type:"fruit",
            image:"https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg",
            isfruit:true
        },
        {
            name:"mango",
            type:"fruit",
            image:"https://i.imgur.com/IywWaDN.jpg",
            isfruit:true
        },
        {
            name:"tomato",
            type:"vegetable",
            image:"https://th.bing.com/th/id/R.8d58969b62181f26a0a5a288b83d595a?rik=8AIiUMKv0Kzh1g&riu=http%3a%2f%2fwww.mountwholefoods.co.nz%2fimages%2f375320%2fpid1135719%2fistockphoto-466175630-612x612.jpg&ehk=EsxsoHPvaMj9kECX7eMNjmxdtF2KWZBYVf2uQwebeC4%3d&risl=&pid=ImgRaw&r=0",
            isfruit:false
        }
      ]
    return(
       
           <>
           <ol>
            { 
             
                    listitems.map((eachobject)=>{
                        return(
                           
                            // <ListItems item={eachobject.name}/>
                            
                            <Img item={eachobject.image}/>
                            // <Image1 item={eachobject.image}/>
            

                        )
                    })
            }
           </ol>
           </>
    )
}
export default ListComponent;