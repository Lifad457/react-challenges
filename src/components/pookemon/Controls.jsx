import React from "react"
import { ControlsContainer } from "../../styles/pookemon/pookemon.css"

export default function Controls() {
	return (
		<ControlsContainer>
			<h4>Controls</h4>
			<p>
				<span>Move:</span> direction pad or arrow keys
			</p>
			<p>
				<span>Place Bomb:</span> A button or "a" key
			</p>
			<p>
				<span>Activate Bomb:</span> B button or "b" key
			</p>
			<p>
				<span>Sound Off:</span> Select button
			</p>
			<p>
				<span>Sound On:</span> Start button (default)
			</p>
		</ControlsContainer>
	)
}
