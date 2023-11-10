import attackOptionsList from "../../datas/RPG_char_creator/attackOptionsList"
import namesList from "../../datas/RPG_char_creator/namesList"
import { StyledButton } from "../../styles/RPG_char_creator/rpg-char-creator.css"

export default function Button({ setCharacterData }) {
	function toggle() {
		setCharacterData(() => {
			function genRanNum(max) {
				return Math.floor(Math.random() * max)
			}

			function flipCoin() {
				return genRanNum(100) < 50 ? true : false
			}

			function getAttackOptions() {
				let optionsListCopy = [...attackOptionsList]
				let newOptionsArray = new Array(6).fill("")
				return newOptionsArray.map(() => {
					const randomIndex = genRanNum(optionsListCopy.length)
					const cachedName = optionsListCopy[randomIndex]
					optionsListCopy.splice(randomIndex, 1)
					return cachedName
				})
			}

			return {
				hat: flipCoin() ? true : false,
				shield: flipCoin() ? true : false,
				weapon: flipCoin() ? "sword" : "staff",
				stats: {
					hp: genRanNum(100),
					mp: genRanNum(100),
					strength: genRanNum(100),
				},
				attackOptions: getAttackOptions(),
				name: namesList[genRanNum(namesList.length)],
			}
		})
	}

	return <StyledButton onClick={toggle}>Toggle</StyledButton>
}
