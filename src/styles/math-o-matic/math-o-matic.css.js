import styled from "styled-components";
import cbBg  from "../../assets/images/math-o-matic/chalkboard-background.jpg";
import woodBorder from "../../assets/images/math-o-matic/wood-border.jpg";

export const Wrapper = styled.div`
    transform: scale(0.70);
    background-image: url(${cbBg});
    background-size: cover;
    background-position: 100% 100%;
    width: 600px;
    height: 600px;
    display: grid; 
    grid-template-columns: 1fr;  
    grid-template-rows: 1fr 2fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "top"
        "bottom"
        "bottom"; 
    border-width: 25px;
    border-style: solid;
    border-image: url(${woodBorder}) 25 25 stretch;
    overflow: hidden;
    box-shadow: 1px 10px 10px 10px #111111;

    h1 {
        font-size: 50px;
        margin: 0;
        height: 100%;
        width: 100%;
        font-weight: normal;
        color: #BEE3DB;
        grid-area: top;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    form {
        height: 100%;
        width: 100%;
        grid-area: bottom;
        display: grid; 
        grid-template-columns: 1fr; 
        grid-template-rows: 1fr 1fr 0.8fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            "playAreaTop"
            "playAreaMiddle"
            "playAreaBottom"; 
    }

    label {
        font-size: 90px;
        color: #F7B2B7;
        text-align: center;
        width: 100%;
        height: 100%;
        padding: 0 40px 0 0px;
        gap: 20px;
        grid-area: playAreaTop;
        display: flex;
        justify-content: space-between;
    }

    input {
        width: 160px;
        height: 100px;
        line-height: 50px;
        border-radius: 5px;
        background: #11111172;
        border: 1px solid gray;
        color: #F7B2B7;
        font-size: 90px;
        font-family: var(--ff-primary);
        text-align: center;
        margin: auto 0;
    }

    .input-accepted {
        background: none;
        border: none !important;
        outline: none !important;
    }

    .hidden {
        visibility: hidden;
    }

    input:focus {
        outline: 1px solid gray;
    }

    input:focus::placeholder {
        color: transparent;
    }

    input::placeholder {
        color: #F7B2B7;
        opacity: 1;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
`
export const ProblemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
export const ButtonContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    gap: 30px;    
    grid-area: playAreaBottom;

    button {
        padding: 0.1em 0.25em;
        width: 13em;
        height: 4.2em;
        background-color: #212121;
        border: 0.08em solid black;
        border-radius: 0.3em;
        font-size: 12px;
        transition: opacity 1s;
        box-shadow: 1px 2px 2px 2px black;
        font-weight: 600;
    }

    button:disabled {
        opacity: .5;
        cursor: not-allowed;
    }

    button:hover {
        cursor: pointer;
        filter: brightness(.8);
    }

    button:focus:not(:focus-visible) {
        outline: none;
    }

    button span {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0.4em;
        width: 8.25em;
        height: 2.5em;
        background-color: #222222;
        border-radius: 0.2em;
        font-size: 1.5em;
        color: #fff;
        border: 0.08em solid black;
        box-shadow: 0 0.4em 0.1em 0.019em #fff;
    }

    .check-answer-button span {
        background-color: #F7B2B7;
    }

    .new-problem-button span {
        background-color: #BEE3DB;
    }

    .start-button span {
        background-color: #82FAA3;
        filter: brightness(.8);
    }

    button span {
        color: black;
    }

    button span:hover {
        transition: all 1s;
        transform: translate(0, 0.1em);
    }

    button span:active {
        transition: all 0.5s;
        transform: translate(0, 0.4em);
        box-shadow: 0 0 0 0 #fff;
    }

    button span:not(active) {
        transition: all 1s;
    }
`
export const MessageContainer = styled.div`
    font-size: 70px;
    grid-area: playAreaMiddle;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .too-high {
        color: #BBBE64;
    }

    .correct {
        color: #A2FAA3;
    }

    .too-low, .invalid-input {
        color: #DD1155;
    }

    .fade-out {
        animation: fade-out 2s linear both;
    }

    .hidden {
        visibility: hidden;
    }

    @keyframes fade-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`