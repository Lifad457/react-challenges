import { ConfigurationMenu, PushButton } from "../../styles/dashboard/dashboard.css"
import ConfigButton from "./ConfigButton"
import { nanoid } from "nanoid"

export default function ConfigMenu(props) {
	const { widgetConfig, setWidgetConfig, DEFAULT_CONFIG } = props.stateProps

	function reset() {
		setWidgetConfig(DEFAULT_CONFIG)
	}

	const ConfigButtons = widgetConfig.map((widget) => {
		return (
			<ConfigButton
				name={widget.name}
				checked={widget.selected}
				changeHandler={props.changeHandler}
				key={nanoid()}
			/>
		)
	})

	return (
		<ConfigurationMenu>
			<PushButton onClick={reset}>
				Reset
			</PushButton>
			<PushButton onClick={props.save}>
				Save
			</PushButton>
			{ConfigButtons}
		</ConfigurationMenu>
	)
}
