import React from "react"
import Bomb from "./Bomb"
import { GameScreenBorder, GameScreenDiv } from "../../styles/pookemon/pookemon.css"
import pookachuSprites from "../../assets/images/pookemon/pookachu-sprites/pookachuSprites"

export default function GameScreen(props) {
    
	const {
		pookachu,
		bombProps,
		doorDestroyed,
		escaped,
		gameStarted,
		setGameStarted,
	} = props

	const moveOptions = [
		{ step: "move2" },
		{ step: "move3" },
		{ step: "move1" },
	]

	const [currentMovement, setCurrentMovement] = React.useState(moveOptions[0])

	const type = pookachu.wantsToMove ? "moving" : "still"
	const direction = pookachu.direction

	const movement = pookachu.wantsToMove ? currentMovement.step : ""

	const image = movement ? pookachuSprites[type][direction][movement] : pookachuSprites[type][direction]

	function getNextMove(currentMove) {
		const currentIndex = moveOptions.indexOf(currentMove)
		if (currentIndex < moveOptions.length - 1) {
			return moveOptions[currentIndex + 1]
		} else {
			return moveOptions[0]
		}
	}

	React.useEffect(() => {
		let interval
		let timeElapsed = 0

		if (pookachu.wantsToMove) {
			interval = setInterval(() => {
				setCurrentMovement(prev => {
					return getNextMove(prev)
				})
			}, 60)
		}
		return () => clearInterval(interval)
	}, [pookachu.wantsToMove])

	let screenClass

	if (!gameStarted) {
		screenClass = undefined
	} else {
		screenClass = doorDestroyed ? "door-destroyed" : "door-intact"
	}

	return (
		<header>
			<h1>
				<span>P</span>ookémon
			</h1>
			<GameScreenBorder>
				<GameScreenDiv className={`${screenClass}`}>
					{escaped && <h3>Pookachu escaped!</h3>}
					{!gameStarted && <h3>Press any button to start the game.</h3>}
					{gameStarted && (
						<img
							style={{
								left: `${pookachu.xPosition}px`,
								top: `${pookachu.yPosition}px`,
								zIndex: 5,
							}}
							className={escaped ? "escaped" : ""}
							src={image}
						/>
					)}
					{bombProps.bomb.planted && (
						<Bomb
							bombData={bombProps.bomb}
							resetBomb={bombProps.resetBomb}
							checkDoor={bombProps.checkDoor}
						/>
					)}
				</GameScreenDiv>
			</GameScreenBorder>
		</header>
	)
}
