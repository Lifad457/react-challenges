import React from "react"
import Fire from "../components/fire-starter/Fire"
import Torch from "../components/fire-starter/Torch"
import runBackgroundEffects from "../utilities/runBackgroundEffects"
import { GameArea, TorchContainer, WoodContainer, Wrapper } from "../styles/fire-starter/fire-starter.css"
import GlobalStyle from "../styles/fire-starter/global.css"

export default function FireStarter() {
    const [torchEquipped, setTorchEquipped] = React.useState(false)
	const [woodKindling, setWoodKindling] = React.useState(false)
	const [woodOnFire, setWoodOnFire] = React.useState(false)
    const [cursorPosition, setCursorPosition] = React.useState({x: null, y: null})
	const kindleClass = woodKindling && !woodOnFire && "kindle"
   
    runBackgroundEffects(
        torchEquipped,
        woodOnFire,
        setWoodKindling,
        setWoodOnFire,
        setCursorPosition
    )
	
	let torchStyle = {
		position: "absolute",
        left: cursorPosition.x - 10,
		top: cursorPosition.y - 60,
	}

    function handleMouseEnter() {
        if (torchEquipped) {
            setWoodKindling(true)
        } 
    }

    function handleMouseLeave() {
        if (torchEquipped && woodKindling) {
            setWoodOnFire(true)
        } 
    }

	return (
        <>
            <GlobalStyle />
            <Wrapper 
                className={`${torchEquipped && "relative no-cursor"}`} 
                onMouseUp={() => setTorchEquipped(false)}
            >
                <GameArea className={`${!torchEquipped && "relative"}`}>
        
                    <TorchContainer
                        onMouseDown={() => setTorchEquipped(true)}
                        className={`${torchEquipped && "torch-equipped"}`}
                        style={torchEquipped ? torchStyle : null}
                    >
                        <Torch />	
                    </TorchContainer>
                    
                    <WoodContainer 
                        className={`${kindleClass}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        🪵
                        <Fire woodOnFire={woodOnFire} />
                    </WoodContainer>
                    
                </GameArea>
            </Wrapper>
        </>
	)
}