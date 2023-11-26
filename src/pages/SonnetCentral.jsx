import React from "react"
import sonnetsData from "../datas/sonnet-central/sonnetsData"
import Header from "../components/sonnet-central/Header"
import { nanoid } from "nanoid"
import GlobalStyle from "../styles/sonnet-central/global.css"
import { SonnetContainer, Wrapper } from "../styles/sonnet-central/sonnet-central.css"

export default function SonnetCentral() { 
    const inputRef = React.useRef()
    const [searchInput, setSearchInput] = React.useState("")

    function handleClick() {
        setSearchInput(inputRef.current.value.trim())
    }

    const sonnets = searchInput ? sonnetsData
        .filter(sonnet => sonnet.lines
        .some(line => line.toUpperCase().includes(searchInput.toUpperCase())))
        .map(sonnet => (
        <div key={nanoid()} className="sonnet">
            <h3>{sonnet.number}</h3>
            {sonnet.lines.map(line => (
            <p key={nanoid()}>
                {line.split(" ").map(word => (
                word.toUpperCase().includes(searchInput.toUpperCase()) 
                    ? <span key={nanoid()}>{word}</span> : ` ${word} `
                ))}
            </p>))}
        </div>
        )) : null

    const noResultsMessage = (
        <p className="no-results-message">
        Alas, thy search hath yielded no results. 
        </p>
    )

    let results 

    if (sonnets && sonnets.length > 0) {
        results = sonnets
    } else if (searchInput) {
        results = noResultsMessage
    } else {
        results = null
    }

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Header searchProps={{inputRef, handleClick}}/>
                
                <SonnetContainer> 
                    {results}
                </SonnetContainer>
            
            </Wrapper>
        </>
    )
}  