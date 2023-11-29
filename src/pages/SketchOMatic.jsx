import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { ButtonContainer, Canvas, Container, Wrapper } from "../styles/sketch-o-matic/sketch.css"
import GlobalStyle from "../styles/sketch-o-matic/global.css"

export default function SketchOMatic() {
 
	const INITIAL_STATE = new Array(3600)
        .fill("").map(item => ( 
            { id: nanoid(), filled: false }
        ))

	const [pixels, setPixels] = useState(INITIAL_STATE)
	const [mouseDown, setMouseDown] = useState(false)
    const [wantsToDraw, setWantsToDraw] = useState(true)
    const [resetRequested, setResetRequested] = useState(false)
    
    console.log(wantsToDraw)
    
	function reset() {
        setResetRequested(true)
	}
    
    function togglePencil() {
        setWantsToDraw(!wantsToDraw)
    }

    useEffect(()=>{
        
        let timeOutOne
        let timeOutTwo
        
         if (resetRequested) {
            timeOutOne = setTimeout(()=>{
                setPixels(prevPixels => prevPixels.map(pixel => ({...pixel, filled: false}))
                )
            }, 1000)
         }
            
        if (resetRequested) {
            timeOutTwo = setTimeout(()=>{
                setResetRequested(false)
            }, 1001)
        }
        return () => {
            clearTimeout(timeOutOne)
            clearTimeout(timeOutTwo)
        }
    }, [resetRequested])
    
	const pixelElements = pixels.map((pixel) => (
		<div
			key={pixel.id}
            id={pixel.id}
			className={`pixel ${pixel.filled ? "filled" : "empty"}`}
		></div>
	))

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Container className={`${resetRequested && "shake-horizontal"}`}>
                    <h1>Sketch-o-Matic</h1>
                    <Canvas
                        className={`${wantsToDraw ? "draw" : "erase"} 
                                    ${resetRequested && "fade-out"}`}
                    >
                        {pixelElements}
                    </Canvas>
                    <ButtonContainer>
                        <button onClick={reset}>Reset</button>
                        <button onClick={togglePencil}>{wantsToDraw ? "Erase" : "Draw"}</button>
                    </ButtonContainer>
                </Container>
            </Wrapper>
        </>
    )
}