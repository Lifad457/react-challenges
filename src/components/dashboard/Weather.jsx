import Draggable from "react-draggable"
import { RemoveButton, Widget, WidgetWrapper } from "../../styles/dashboard/dashboard.css"
import weather from "../../assets/images/dashboard/widgets/weather.png"

export default function Weather(props) {
	return (
		<WidgetWrapper
			className="Weather"
			style={{ gridArea: `area-${props.gridArea}` }}
		>
			<Draggable
				onStop={props.dragHandler}
				defaultPosition={props.getOffset("Weather")}
				cancel="button"
			>
				<Widget className="Weather">
					<RemoveButton
						name="Weather"
						onClick={props.changeHandler}
					></RemoveButton>
					<img src={weather} />
				</Widget>
			</Draggable>
		</WidgetWrapper>
	)
}
