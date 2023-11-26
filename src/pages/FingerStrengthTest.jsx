import React from "react"
import Thermometer from "../components/finger-strength-test/Thermometer"
import Header from "../components/finger-strength-test/Header"
import GlobalStyle from "../styles/finger-strength/global.css"
import { Button, Time, Wrapper } from "../styles/finger-strength/finger-strength.css"

export default function FingerStrengthTest() {
    const [timeCount, setTimeCount] = React.useState(0)
	const [cursorInButton, setCursorInButton] = React.useState(false)
    const [buttonHeldDown, setButtonHeldDown] = React.useState(false)
	const timeToDisplay = (timeCount / 100).toFixed(2)
    const buttonClass = !timeCount ? "outsideButton" : undefined

    React.useEffect(() => {
        let interval
        if (cursorInButton && buttonHeldDown) {
            interval = setInterval(() => {
                setTimeCount(timeCount => timeCount + 1)
            }, 10)
        }
        return () => {
            setTimeCount(0)
            if (buttonHeldDown && !cursorInButton) {
                setButtonHeldDown(false)
            }
            clearInterval(interval)
        }
    }, [cursorInButton, buttonHeldDown])
 
    function toggleCursorInButton() {
		setCursorInButton(!cursorInButton)
	}

    function toggleButtonHeldDown() {
        setButtonHeldDown(!buttonHeldDown)
    }

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Header time={+timeToDisplay} />
                <Thermometer time={+timeToDisplay} />
                <Button 
                    onMouseEnter={toggleCursorInButton}
                    onMouseLeave={toggleCursorInButton}
                    onMouseDown={toggleButtonHeldDown}
                    onMouseUp={toggleButtonHeldDown}
                    className={buttonClass}
                >Hold Down</Button>
                <Time>{timeToDisplay} seconds </Time>
            </Wrapper>
        </>
    )
}