import React from "react"
import Draggable from "react-draggable"
import { Day, Month, RemoveButton, Time, Widget, WidgetWrapper } from "../../styles/dashboard/dashboard.css"

export default function Clock(props) {
	const [date, setDate] = React.useState(getDate())
	const dayName = date.toLocaleString([], { weekday: "long" })
	const dayNumber = date.getDate()
	const month = date.toLocaleString([], { month: "long" })
	const year = date.getFullYear()
	const time = date.toLocaleString([], {
		hour: "numeric",
		minute: "2-digit",
	})

	function getDate() {
		return new Date()
	}
	React.useEffect(() => {
		let ticker = setInterval(() => {
			setDate(getDate())
		}, 500)
		return () => clearInterval(ticker)
	}, [])

	return (
		<WidgetWrapper
			className="Clock"
			style={{ gridArea: `area-${props.gridArea}` }}
		>
			<Draggable
				onStop={props.dragHandler}
				defaultPosition={props.getOffset("Clock")}
				cancel="button"
			>
				<Widget className="Clock">
					<RemoveButton
						name="Clock"
						onClick={props.changeHandler}
					></RemoveButton>
					<Day>{dayName}</Day>
					<Month>
						{month} {dayNumber}, {year}
					</Month>
					<Time>
						<div>{time}</div>
					</Time>
				</Widget>
			</Draggable>
		</WidgetWrapper>
	)
}
