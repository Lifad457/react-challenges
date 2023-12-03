import React from "react"
import { StartAndSelectButtonsContainer } from "../../styles/pookemon/pookemon.css"
import soundOff from "../../assets/images/pookemon/icons/sound-off.svg"
import soundOn from "../../assets/images/pookemon/icons/sound-on.svg"

export default function SoundButtons({ clickHandlers }) {
	return (
		<StartAndSelectButtonsContainer>
			<div className="select-button">
				<button onClick={clickHandlers.turnOffSound}></button>
				<span>Select</span>
				<img src={soundOff} />
			</div>

			<div className="start-button">
				<button onClick={clickHandlers.turnOnSound}></button>
				<span>Start</span>
				<img src={soundOn} />
			</div>
		</StartAndSelectButtonsContainer>
	)
}
