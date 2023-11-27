import { useState } from "react"
import WelcomeMessage from "../components/virtual-reality/WelcomeMessage"
import generateMessage from "../utilities/generateMessage"
import GlobalStyle from "../styles/virtual-reality/global.css"
import { Wrapper } from "../styles/virtual-reality/virtual-reality.css"

export default function VirtualReality() {
    const [userData, setUserData] = useState({
        hasEntered: false,
        pageLoadTime: new Date(),
        entranceTime: undefined,
        clickCoordinates: { offsetX: undefined, offsetY: undefined }
    })

    if (userData.hasEntered) {
        generateMessage(userData)
    }

  return (
    <Wrapper>        
            <GlobalStyle />
            <button 
                disabled={userData.hasEntered }
                className={userData.hasEntered ? "activated" : "unactivated"}
                onClick={(e) => {
                    setUserData(prev => ({
                        ...prev, 
                        hasEntered: true,
                        entranceTime: new Date(),
                        clickCoordinates: { offsetX: e.nativeEvent.offsetX, offsetY: e.nativeEvent.offsetY }
                    }))
                }}
            >
                {userData.hasEntered ? "Connecting" : "Enter"}
            </button>      
      
      <WelcomeMessage userData={userData} />
    </Wrapper>
  )
}
