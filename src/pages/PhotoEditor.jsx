import React from "react"
import { Image, ImageContainer, MainContainer } from "../styles/photo-editor/photo-editor.css"
import photo from "../assets/images/photo-editor/akasha.jpg"

export default function PhotoEditor() {
	const [filter, setFilter] = React.useState({
		brightness: 1,
		contrast: 1,
		saturation: 1,
	})

	return (
		<MainContainer>
			<h1><span>📷</span> Photo Editor <span>📷</span></h1>

			<ImageContainer>
				<Image 
                    src={photo} 
                    $filter={filter}
                />
			</ImageContainer>

			<form>
				<label>
					<input
						type="range"
						name="brightness"
						min={0}
						max={2}
						step={0.1}
                        onChange={(event) => setFilter(prev => ({...prev, brightness: event.target.value}))}
                        value={filter.brightness}
					/>
					<span>Brightness</span>
				</label>

				<label>
					<input
						type="range"
						name="contrast"
						min={0}
						max={2}
						step={0.1}
                        onChange={(event) => setFilter(prev => ({...prev, contrast: event.target.value}))}
                        value={filter.contrast}
					/>
					<span>Contrast</span>
				</label>

				<label>
					<input
						type="range"
						name="saturation"
						min={0}
						max={2}
						step={0.1}
                        onChange={(event) => setFilter(prev => ({...prev, saturation: event.target.value}))}
                        value={filter.saturation}
					/>
					<span>Saturation</span>
				</label>
			</form>
		</MainContainer>
	)
}
