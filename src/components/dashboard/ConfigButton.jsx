import { Slider, Switch } from "../../styles/dashboard/dashboard.css";

export default function ConfigButton(props) {
	return (
		<Switch>
			<input
				type="checkbox"
				checked={props.checked}
				onChange={props.changeHandler}
				name={props.name}
			/>
			<Slider></Slider>
			<p>{props.name}</p>
		</Switch>
	)
}
