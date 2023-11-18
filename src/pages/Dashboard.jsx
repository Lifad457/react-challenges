import React from "react"
import { nanoid } from "nanoid"
import blankConfig from "../datas/dashboard/blankConfig"
import Clock from "../components/dashboard/Clock"
import News from "../components/dashboard/News"
import Quote from "../components/dashboard/Quote"
import Stocks from "../components/dashboard/Stocks"
import ToDo from "../components/dashboard/ToDo"
import Weather from "../components/dashboard/Weather"
import ConfigMenu from "../components/dashboard/ConfigMenu"
import GlobalStyle from "../styles/dashboard/global.css"
import { SavedMessageContainer,SavedMessage, WidgetContainer } from "../styles/dashboard/dashboard.css"

export default function Dashboard() {
    
	const DEFAULT_CONFIG = blankConfig.map(widget => {
		return {...widget, positionData: {...widget.positionData}}
	})

	const [widgetConfig, setWidgetConfig] = React.useState(
		() => JSON.parse(localStorage.getItem('config')) || DEFAULT_CONFIG
	)
	const [saveRequested, setSaveRequested] = React.useState(false)

    function save() {
		setSaveRequested(true) 
		localStorage.setItem('config', JSON.stringify(widgetConfig)); 
	} 

	const widgetComponents = {
		Clock: <Clock />,
		News: <News />,
		Quote: <Quote />,
		Stocks: <Stocks />,
		ToDo: <ToDo />,
		Weather: <Weather />
	}
    
    const savedMessage = (
        <SavedMessageContainer>
            <SavedMessage>Saved!</SavedMessage>
        </SavedMessageContainer>
    )
	
	React.useEffect(()=>{
		if (saveRequested) {
			setTimeout(()=>{
				setSaveRequested(false)	
			}, 1000)
		}
	}, [saveRequested])

	function dragHandler(e, data) {
		if (e.target.dataset.type !== "button") {
			setWidgetConfig((prevConfig) => {
				let allConfigs = [...prevConfig]
				let targetConfig = allConfigs.find(
					(widget) => widget.name === data.node.classList[2]
				)
				targetConfig.positionData = {
					...targetConfig.positionData,
					customPosition: true,
					x: data.x,
					y: data.y,
				}
				return allConfigs
			})
		}
	}

	function getOffset(name) {
		let targetConfig = widgetConfig.find((widget) => widget.name === name)
		if (!targetConfig.positionData.customPosition) {
			return undefined
		} else {
			return { x: targetConfig.positionData.x, y: targetConfig.positionData.y }
		}
	}

	const widgetsToDisplay = widgetConfig
		.filter((widget) => widget.selected)
		.map((widget) => {
			const component = { ...widgetComponents[widget.name], key: nanoid() }
			component.props = {
				...component.props,
				name: widget.name,
				gridArea: widget.positionData.gridArea,
				getOffset: getOffset,
				dragHandler: dragHandler,
				changeHandler: changeHandler,
			}
			return component
		})

	function changeHandler(event) {
		setWidgetConfig((prevConfig) => {
			return prevConfig.map((widget) => {
				return widget.name === event.target.name
					? { ...widget, selected: !widget.selected }
					: { ...widget }
			})
		})
	}

	return (
        <>
            <GlobalStyle />
            <div className="wrapper">
                {saveRequested && savedMessage}
                <WidgetContainer>{widgetsToDisplay}</WidgetContainer>
                <ConfigMenu
                    stateProps={{ widgetConfig, setWidgetConfig, DEFAULT_CONFIG }}
                    changeHandler={changeHandler}
                    save={save}
                />
            </div>
        </>
	)
}
