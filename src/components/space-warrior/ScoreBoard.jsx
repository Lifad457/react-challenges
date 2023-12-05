import React from "react"
import { ScoreBoardContainer } from "../../styles/space-warrior/space-warrior.css"

export default function ScoreBoard({data}) {
    return (
        <ScoreBoardContainer>
            <div className="timer">
                <div className="display-value">{data.timeLeft}</div>
                <div>Time</div>
            </div>
            <div className="title">
                Space <br/> Warrior
            </div>
            <div className="score">
                <div className="display-value">{data.score}</div>
                <div>Score</div>
            </div>
        </ScoreBoardContainer>
    )
}