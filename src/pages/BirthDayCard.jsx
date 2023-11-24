import React from "react"
import Header from "../components/bd-card/Header"
import FrontMessage from "../components/bd-card/FrontMessage"
import InnerMessage from "../components/bd-card/InnerMessage"
import GlobalStyle from "../styles/bd-card/global.css"
import { Card, Cover, Wrapper } from "../styles/bd-card/bdcard.css"
import forLoop from "../assets/images/bd-card/forLoop.png"

export default function BithDayCard() {
	
/* Challenge

	The card opens and closes when the user clicks on the cover, but the card company wants a more sophisticated way of controlling it — one that simulates a finger swipe with the user's mouse. Your task is to set one up as follows:
		
		1. The "open" class should be applied to the div with the className of "cover" on line 34 
		   if and only if all of the following conditions are met: 
		   	
			   - The user is holding down their mouse button somewhere inside the "cover" div.
			   
    		   - While continuing to hold the mouse button, they move their cursor 50 pixels to the 
			     left of where they started holding it down. 
		
		2. If the user then presses their mouse down on the "cover" div when it is open, the "open" 
		   class should be removed, thus closing the card. 
		   
	Note: You will have to replace or modify the cardOpen state, the onClick event handler on line 35, and the way the "open" class is currently being applied on line 36. 
*/

	const [cardOpen, setCardOpen] = React.useState(false)

    function fingerSwipe(event) {
        const cover = document.querySelector("#cover")        
        const startX = event.clientX
        function fingerSwipeEnd(event) {
            const endX = event.clientX
            const distance = startX - endX

            if (distance > 50) {
                setCardOpen(true)
            }
        }

        if (cardOpen) {
            cover.addEventListener("mouseup", () => setCardOpen(false))
        }
        else {
            cover.addEventListener("mouseup", fingerSwipeEnd)
        }
    }

	return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Header />
                <Card>
                    <InnerMessage />
                    
                    <Cover id="cover"
                        onMouseDown={fingerSwipe}
                        className={`${cardOpen && "open"}`}
                    >
                        <FrontMessage /> 
                        <img src={forLoop} />
                    </Cover>
                    
                </Card>
            </Wrapper>
        </>
	)
}
