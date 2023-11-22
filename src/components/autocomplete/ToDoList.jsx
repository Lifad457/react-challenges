import React from "react"
import { nanoid } from "nanoid"
import savedData from "../../datas/autocomplete/savedData"
import addItem from "../../assets/images/autocomplete/add-item.svg"
import { AddItemIcon, AllProgressBarsContainer, CheckBoxLabel, CheckMark, NewItemLabel, ProgressBarContainer, ProgressBarContent, ToDoListContainer, ToDoListItemContainer, ToDoListItemText } from "../../styles/autocomplete/autocomplete.css"

export default function ToDoList() {
	const [listData, setListData] = React.useState(savedData)
	const [newItemInput, setNewItemInput] = React.useState("")
	const [autoCompleteRequested, setAutoCompleteRequested] = React.useState(false)

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
    
    const div = document.querySelector(".to-do-list-container")

	React.useEffect(() => {
		if (div) {
			div.scrollTop = div.scrollHeight
		}
	}, [listData])

/**** Most Relevant Code **************************************************************************/

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


/* Challenge
  
    1. When the text input with the className of "new-item-input" is in focus, the opacity of the 
	   image with the className of "add-item-icon" should be set to 0.2 by adding the "faded" class to the image's className. When it's not the input is not focus, this class should be removed from the image.
       
    2. When the user has added a new item to the to-do list, the text input element should be 
       cleared of text and become empty again.
       
    3. When the user clicks the "AutoComplete" button, the checkboxes should all become checked at 
       the same time that the to-do list items get crossed out. 
       
    4. To complete these tasks, you will need to make a few small changes to the code below these 
       comments. You will also need to make a couple of small additions to this file. You may make these additions wherever you think they should go. If you find yourself changing or adding a lot of code, you're overcomplicating things! 
       
    Note: You should read through the code between line 32 (marked "Most Relevant Code") and these 
    comments. Aspects of this code are relevant to completing these tasks. However, you do not need to make any modifications to this code. You just need to understand it!  
*/

	const currentList = listData.map(item => {
		return (
			<ToDoListItemContainer key={item.id}>
				<CheckBoxLabel>
					<input
						type="checkbox"
						name={item.id}
						onChange={handleCheckBoxChange}
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
	
	const [inputInFocus, setInputInFocus] = React.useState(false)

	return (
		<div>
			<ToDoListContainer>
				{currentList}
				<NewItemLabel>
					<AddItemIcon
						src={addItem}
						className={`${inputInFocus && "faded"}`}
					/>
					<newItemInput
						type="text"
						onKeyDown={handleEnter}
						onChange={handleNewItemInputChange}
						onFocus={()=> setInputInFocus(true)}
						onBlur={()=> setInputInFocus(false)}
					/>
				</NewItemLabel>
			</ToDoListContainer>
			<div className="do-it-button-container">
				<button onClick={autoComplete}>AutoComplete</button>
			</div>
		</div>
	)
}
