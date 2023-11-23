import React from "react"
import { nanoid } from "nanoid"
import savedData from "../../datas/autocomplete/savedData"
import addItem from "../../assets/images/autocomplete/add-item.svg"
import { AddItemIcon,
			AllProgressBarsContainer,
			CheckBoxLabel,
			CheckMark,
			DoItButtonContainer,
			NewItemLabel,
			NewItemInput,
			ProgressBarContainer,
			ProgressBarContent,
			ToDoListContainer,
			ToDoListItemContainer,
			ToDoListItemText } from "../../styles/autocomplete/autocomplete.css"

export default function ToDoList() {
	const [listData, setListData] = React.useState(savedData)
	const [newItemInput, setNewItemInput] = React.useState("")
	const [autoCompleteRequested, setAutoCompleteRequested] = React.useState(false)
	const [inputInFocus, setInputInFocus] = React.useState(false)

	function handleCheckBoxChange(event) {
		setListData(prevList => {
			return prevList.map(item => {
				return item.id === event.target.name
					? { ...item, complete: !item.complete }
					: item
			})
		})
	}

	function handleNewItemInputChange(event) {
		setNewItemInput(event.target.value)
	}
    
    const div = document.querySelector("#list-container")
	React.useEffect(() => {
		if (div) {
			div.scrollTop = div.scrollHeight
		}
	}, [listData])

	function handleEnter(event) {
		if (newItemInput.trim()) {
			if (event.key === "Enter") {
				setListData(prevList => {
					const newListItem = {
						text: event.target.value,
						complete: false,
						id: nanoid(),
					}
					return [...prevList, newListItem]
				})
				setNewItemInput("")
			}
		}
	}

	function autoComplete() {
		setAutoCompleteRequested(true)
	}

	React.useEffect(() => {
		if (autoCompleteRequested) {
			let timeOut = setTimeout(() => {
				setAutoCompleteRequested(false)
				setListData(prevData => {
					return prevData.map(item => {
						return !item.complete ? { ...item, complete: true } : item
					})
				})
			}, 2000)
		}
	}, [autoCompleteRequested])

	const currentList = listData.map(item => {
		return (
			<ToDoListItemContainer key={item.id}>
				<CheckBoxLabel>
					<input
						type="checkbox"
						name={item.id}
						onChange={handleCheckBoxChange}
						checked={item.complete}
					/>
					<CheckMark></CheckMark>
					<ToDoListItemText className={`${item.complete && "crossed-out"}`}>
						{item.text}
					</ToDoListItemText>
				</CheckBoxLabel>
				<AllProgressBarsContainer>
					{!item.complete && autoCompleteRequested && (
						<ProgressBarContainer>
							<ProgressBarContent></ProgressBarContent>
						</ProgressBarContainer>
					)}
				</AllProgressBarsContainer>
			</ToDoListItemContainer>
		)
	})

	return (
		<div>
			<ToDoListContainer id="list-container">
				{currentList}
				<NewItemLabel>
					<AddItemIcon
						src={addItem}
						faded={inputInFocus}
					/>
					<NewItemInput
						type="text"
						value={newItemInput}
						onKeyDown={handleEnter}
						onChange={handleNewItemInputChange}
						onFocus={()=> setInputInFocus(true)}
						onBlur={()=> setInputInFocus(false)}
					/>
				</NewItemLabel>
			</ToDoListContainer>
			<DoItButtonContainer>
				<button onClick={autoComplete}>AutoComplete</button>
			</DoItButtonContainer>
		</div>
	)
}
