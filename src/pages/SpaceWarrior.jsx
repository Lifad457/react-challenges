import React from "react"
import useSound from "use-sound"
import PlayArea from "../components/space-warrior/PlayArea"
import ScoreBoard from "../components/space-warrior/ScoreBoard"
import GlobalStyle from "../styles/space-warrior/global.css"
import { PlayButton } from "../styles/space-warrior/space-warrior.css"

export default function SpaceWarrior() {
    
    const STARTING_TIME = 60
    const STARTING_SCORE = 0
    const [timerRunning, setTimerRunning] = React.useState(false)
    const [timeLeft, setTimeLeft] = React.useState(STARTING_TIME)
    const [score, setScore] = React.useState(STARTING_SCORE)
    const [playSong] = useSound("../audio/song.mp3")
    const [playClick] = useSound("../audio/click.mp3", {volume: .45})
    
    if (timeLeft === 0 && timerRunning) {
        setTimerRunning(false)
    }
    
    React.useEffect(()=>{
        let interval
        if (timerRunning) {
            interval = setInterval(()=>{
                setTimeLeft(currentTime => currentTime - 1)
            }, 1000) 
        }
        return () => clearInterval(interval)
    }, [timerRunning])
    
    function startGame() {
        setTimerRunning(true)
        if (timeLeft === 0) {
            setTimeLeft(STARTING_TIME)
            setScore(STARTING_SCORE) 
        }
        playSong()
        playClick()
    }
    
    const buttonClass = timerRunning ? "fade-out" : "fade-in"
    
    return (
        <div>
            <GlobalStyle/>
            <ScoreBoard data={{score, timeLeft}}/>
            <PlayArea playProps={{timeLeft, timerRunning, setScore}}/>
            <PlayButton onClick={startGame}
                    disabled={timerRunning}
                    className={`${buttonClass}`}
            >
            Play</PlayButton>
        </div>
    )
}