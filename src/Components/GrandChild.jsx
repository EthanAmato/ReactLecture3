import { userInfoContext } from "./Parent"
import { useContext } from "react"
function GrandChild() {
    const {userInfo, setUserInfo} = useContext(userInfoContext)

    return(
        <div style={{backgroundColor:'black', padding: '3em'}}>
            Grandchild:
            Parent component says that their name is {userInfo.name}, 
            their favorite color is {userInfo.favoriteColor}, and their 
            favorite number is {userInfo.favoriteNumber}
            <button onClick={()=>setUserInfo({...userInfo, name: "Maya"})}>Click to change</button>
        </div>
        
    )
}

export default GrandChild