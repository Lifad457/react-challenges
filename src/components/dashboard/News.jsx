import Draggable from "react-draggable"
import { RemoveButton, Widget, WidgetWrapper } from "../../styles/dashboard/dashboard.css"
import news from "../../assets/images/dashboard/widgets/news.png"

export default function News(props) {
	return (
		<WidgetWrapper
			className="News"
			style={{ gridArea: `area-${props.gridArea}` }}
		>
			<Draggable
				onStop={props.dragHandler}
				defaultPosition={props.getOffset("News")}
				cancel="button"
			>
				<Widget className="News">
					<RemoveButton
						name="News"
						onClick={props.changeHandler}
					></RemoveButton>
					<img src={news} />
				</Widget>
			</Draggable>
		</WidgetWrapper>
	)
}
