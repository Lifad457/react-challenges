import React from "react"
import useSound from "use-sound"
import getSpaceShips from "../../utilities/getSpaceShips"
import shootShip from "../../utilities/shootShip"
import { PlayAreaContainer, ShipContainer } from "../../styles/space-warrior/space-warrior.css"

export default function PlayArea({playProps}) {
    
    const {timeLeft, timerRunning, setScore} = playProps
    const [currentShips, setCurrentShips] = React.useState([]) 
    const [playLaser] = useSound("../audio/laser.mp3", {volume: 0.15})
    const [playExplosion] = useSound("../audio/explosion.mp3", {volume: 0.025})

    React.useEffect(() => {
        if (timeLeft % 6 === 0 && timeLeft !== 0 && timerRunning) {
            setCurrentShips(getSpaceShips)
        }
    }, [timeLeft, timerRunning])
    
    const shipElements = currentShips.map(ship => (
                <ShipContainer 
                     className={`${ship.isShot ? "disappear" : ""} flyDown`} 
                     style={{gridArea: ship.position}}
                     onClick={ship.isShot ? null : () => shootShip(ship.id, ship.points, setCurrentShips, setScore, playExplosion)}
                     key={ship.id}
                 >
                     {ship.isShot ? "💥" : <span className={ship.type}>{ship.icon}</span>}
                 </ShipContainer>)) 
    
    return (
        <PlayAreaContainer onMouseDown={playLaser}>
        {shipElements}
        </PlayAreaContainer>
    )
}