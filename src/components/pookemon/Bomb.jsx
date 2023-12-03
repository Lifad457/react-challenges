import React from "react"
import { BombContainer } from "../../styles/pookemon/pookemon.css"
import bombSprites from "../../assets/images/pookemon/bomb-sprites/bombSprites"

export default function Bomb({ bombData, resetBomb, checkDoor }) {
	const [bombImage, setBombImage] = React.useState("bomb1")

	React.useEffect(() => {
		if (bombData.activated) {
			let bombNum = 1
			let flashCount = 0
			const interval = setInterval(() => {
				if (bombNum < 6 && flashCount === 0) {
					++bombNum
				} else if (flashCount < 12) {
					bombNum === 6 ? (bombNum = 5) : (bombNum = 6)
					++flashCount
				} else if (bombNum < 7) {
					++bombNum
				} else {
					clearInterval(interval)
					resetBomb()
					checkDoor()
				}
				setBombImage(`bomb${bombNum}`)
			}, 200)
		}
	}, [bombData.activated])

	return (
		<BombContainer
			style={{
				left: `${bombData.xPosition}px`,
				top: `${bombData.yPosition}px`,
			}}
		>
			<img
				src={bombSprites[bombImage]}
				className={bombImage === "bomb7" ? "explosion" : "expand"}
			/>
		</BombContainer>
	)
}