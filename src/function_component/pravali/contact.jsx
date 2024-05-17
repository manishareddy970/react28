import { useDispatch, useSelector } from "react-redux"
import ProfileAction from "../Redux/action/profile-action"



const PravaliContact=()=>{
    const profileInfo=useSelector(state=>state.profile)
    console.log(profileInfo)
    const dispatch=useDispatch()

  const ProfileUpdate=()=>{
    dispatch(ProfileAction("manisha"))
  }

    
    return(
        <>
          <h1>profile information</h1>
          <h2>{profileInfo.profileName}</h2>
          <h2>{profileInfo.age}</h2>
          <h2>{profileInfo.city}</h2>
          <button onClick={ProfileUpdate}>update profile</button>
       
        </>
    )
}
export default PravaliContact