import Draggable from "react-draggable"
import { RemoveButton, Widget, WidgetWrapper } from "../../styles/dashboard/dashboard.css"
import quote from "../../assets/images/dashboard/widgets/quote.png"

export default function Quote(props) {
	return (
		<WidgetWrapper
			className="Quote"
			style={{ gridArea: `area-${props.gridArea}` }}
		>
			<Draggable
				onStop={props.dragHandler}
				defaultPosition={props.getOffset("Quote")}
				cancel="button"
			>
				<Widget className="Quote">
					<RemoveButton
						name="Quote"
						onClick={props.changeHandler}
					></RemoveButton>
					<img src={quote} />
				</Widget>
			</Draggable>
		</WidgetWrapper>
	)
}
