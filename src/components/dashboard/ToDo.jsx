import Draggable from "react-draggable"
import { RemoveButton, Widget, WidgetWrapper } from "../../styles/dashboard/dashboard.css"
import todo from "../../assets/images/dashboard/widgets/todo.png"

export default function ToDo(props) {
	return (
		<WidgetWrapper
			className="ToDo"
			style={{ gridArea: `area-${props.gridArea}` }}
		>
			<Draggable
				onStop={props.dragHandler}
				defaultPosition={props.getOffset("ToDo")}
				cancel="button"
			>
				<Widget className="ToDo">
					<RemoveButton
						name="ToDo"
						onClick={props.changeHandler}
					></RemoveButton>

					<img src={todo} />
				</Widget>
			</Draggable>
		</WidgetWrapper>
	)
}
