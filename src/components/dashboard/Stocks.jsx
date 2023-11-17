import Draggable from "react-draggable"
import { RemoveButton, Widget, WidgetWrapper } from "../../styles/dashboard/dashboard.css"
import stock from "../../assets/images/dashboard/widgets/stock.png"

export default function Stocks(props) {
	return (
		<WidgetWrapper
			className="Stocks"
			style={{ gridArea: `area-${props.gridArea}` }}
		>
			<Draggable
				onStop={props.dragHandler}
				defaultPosition={props.getOffset("Stocks")}
				cancel="button"
			>
				<Widget className="Stocks">
					<RemoveButton
						name="Stocks"
						onClick={props.changeHandler}
					></RemoveButton>
					<img src={stock} />
				</Widget>
			</Draggable>
		</WidgetWrapper>
	)
}
