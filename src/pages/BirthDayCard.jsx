import React from "react"
import Header from "../components/bd-card/Header"
import FrontMessage from "../components/bd-card/FrontMessage"
import InnerMessage from "../components/bd-card/InnerMessage"
import GlobalStyle from "../styles/bd-card/global.css"
import { Card, Cover, Wrapper } from "../styles/bd-card/bdcard.css"
import forLoop from "../assets/images/bd-card/forLoop.png"

export default function BithDayCard() {
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
