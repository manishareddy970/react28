import { type } from "@testing-library/user-event/dist/type"


const ProfileAction=(name)=>{
    return{
        type:"UPDATE-USERNAME",
         payload:name
    }
}
export default ProfileAction;