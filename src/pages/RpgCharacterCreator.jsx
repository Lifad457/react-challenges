import React from "react"
import noCharacter from "../components/RPG_char_creator/noCharacter"
import Character from "../components/RPG_char_creator/Character"
import StatusBars from "../components/RPG_char_creator/StatusBar"
import Options from "../components/RPG_char_creator/Options"
import Button from "../components/RPG_char_creator/Button"
import attackOptionsList from "../datas/RPG_char_creator/attackOptionsList"
import namesList from "../datas/RPG_char_creator/namesList"
import { Wrapper } from "../styles/RPG_char_creator/rpg-char-creator.css"
import GlobalStyle from "../styles/RPG_char_creator/global.css"

export default function RpgCharacterCreator() {
    const [characterData, setCharacterData] = React.useState({
        hat: false,
        shield: true,
        weapon: "sword",
        name: namesList[Math.floor(Math.random() * namesList.length)],
        attackOptions: attackOptionsList.slice(0, 6),
        stats: {
            hp: Math.floor(Math.random() * 100),
            mp: Math.floor(Math.random() * 100),
            strength: Math.floor(Math.random() * 100),
        },
    })
    
    let dataToUse, functionToUse
    try {
        if (characterData) {
            dataToUse = characterData
        }
    } catch {
        dataToUse = noCharacter.noData
    }
    
    try {
        if (setCharacterData) {
            functionToUse = setCharacterData
        }
    } catch {
        functionToUse = noCharacter.noFunction
    }    

return (
    <>
        <GlobalStyle />
        
        <Wrapper>

            <StatusBars characterData={dataToUse}  />
            
            <Character characterData={dataToUse} />
            
            <Options characterData={dataToUse}  />
            
            <Button setCharacterData={functionToUse}/> 
        
        </Wrapper>
    </>
  )
}