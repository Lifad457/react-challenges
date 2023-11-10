import React from "react"
import { nanoid } from "nanoid"
import reactIcon from '../assets/icons/react.svg'
import GlobalStyle from "../styles/study-buddy/global.css"
import { Container,
     FlashCard,
     FlashCardBack,
     FlashCardFront,
     FlashCardInner,
     Header, 
     Para} from "../styles/study-buddy/study-buddy.css"

export default function StudyBuddy() {

    const [flashCard, setFlashCard] = React.useState({
		question: "What is React?",
		choices: ["A JavaScript framework", "A JavaScript library"],
		answer: "A JavaScript library.",
		explanation: `It's absolutely crucial that if you ever hear anyone have the
              audacity to call it a framework, you must correct them as
              pedantically as possible, preferably starting your response with
              the phrase "um, actually..."`,
        flipped: false
	})

	return (
        <>
            <GlobalStyle />
            <Container>
                <Header>
                    <img src={reactIcon} />
                    <h1> React Study Buddy </h1>
                </Header>
                <FlashCard onClick={() => setFlashCard(prev => {return {...prev, flipped: !prev.flipped}})}>
                    <FlashCardInner className={flashCard.flipped ? "flipped" : ""}>
                        <FlashCardFront>
                            <Para>{flashCard.question}</Para>
                            <ol type="a">
                                {flashCard.choices.map(choice => (
                                    <li key={nanoid()}>{choice}</li>
                                ))}
                            </ol>
                        </FlashCardFront>
                        <FlashCardBack>
                            <Para>{flashCard.answer}</Para>
                            <p>{flashCard.explanation}</p>
                        </FlashCardBack>
                    </FlashCardInner>
                </FlashCard>
            </Container>
        </>
	)
}
