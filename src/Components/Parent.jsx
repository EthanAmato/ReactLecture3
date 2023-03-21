import { useState, createContext } from 'react'
import Child from './Child'
export const userInfoContext = createContext()


function Parent() {

  const [userInfo, setUserInfo] = useState({ name: "Ethan", favoriteColor: "Red", favoriteNumber: 82 })

  return (
    <userInfoContext.Provider value={{userInfo, setUserInfo}}>
      <div style={{ backgroundColor: 'lightgray', padding: '3em' }}>
        Parent
        My name is {userInfo.name}, 
            their favorite color is {userInfo.favoriteColor}, and their 
            favorite number is {userInfo.favoriteNumber}
        <Child />
      </div>
    </userInfoContext.Provider>
  )
}

export default Parent
