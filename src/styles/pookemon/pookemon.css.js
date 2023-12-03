import styled from "styled-components";
import dungeon1 from "../../assets/images/pookemon/backgrounds/dungeon1.png";
import dungeon2 from "../../assets/images/pookemon/backgrounds/dungeon2.png";

export const Wrapper = styled.div`
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background: #B9BEC5;
        margin-bottom: -1px;
        padding: 20px;
    }
    h1 {
        font-size: 50px;
        font-family: "Pokemon Solid";
        color: #FECD00;
        letter-spacing: 3px;
        -webkit-text-stroke: 2px #346ABC;
        margin: 0 0 10px 0
    }
    h1 span {
        margin-right: -4px;
    }
    h3 {
        font-size: 20px;
        font-family: "Pokemon GB";
        color: black;
        margin: 0;
        padding: 15px;
        animation: fade-in 2s linear both
    }
    h3 span {
        margin-right: -4px;
    }
    header {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
    .door-intact {
        animation: fade-in .5s linear both;
        background-image: url(${dungeon1});
    }
    .door-destroyed {
        background-image: url(${dungeon2});
        animation: flicker .3s linear both
    }
    .escaped {
        animation: vanish 10s linear both
    }
    header img {
        position: absolute;
        height: 50px;
        transition: all 2s smooth;
    }

    .expand {
        animation: expand .1s linear both
    }

    .explosion {
        animation: explode .2s linear both;
        z-index: 10
    }

    @keyframes fade-in {
        0% {
            opacity: 0
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes expand {
        0% {
            width: 0%;
            height: 0%;

        }
        100% {
            width: 100%;
            height: 100%;
        }
    }


    @keyframes vanish {
        0% {
            margin-top: 0;
            margin-left: 0;
            height: 50px;
        }
        10% {
            height: 30px
        }
        100% {
            margin-top: 20px;
            margin-left: 15px;
            height: 0px
        }
    }

    @keyframes flicker {
        0% {
            filter: brightness(.2)
        }
        20% {
            filter: brightness(1)
        }
        40% {
            filter: brightness(.2)
        }
        60% {
            filter: brightness(1)
        }
        80% {
            filter: brightness(.2)
        }
        100% {
            filter: brightness(1)
        }
    }

    @keyframes explode {
        0% {
            width: 100%;
            height: 100%;
            opacity: 1;
            margin-bottom: 0;
            filter: brightness(1)
        }
        10% {
            filter: brightness(2)
        }
        20% {
            filter: brightness(1)
        }
        30% {
            filter: brightness(2)
        }
        40% {
            filter: brightness(1)
        }
        50% {
            filter: brightness(2)
        }
        60% {
            filter: brightness(1)
        }
        70% {
            filter: brightness(2)
        }
        80% {
            filter: brightness(1)
        }
        90% {
            opacity: 1;
            filter: brightness(2)
        }
        100% {
            width: 500%;
            height: 500%;
            opacity: 0;
            margin-bottom: 50px;
            filter: brightness(1)
        }
    }
`

export const ConsoleContainer = styled.div`
    width: 400px;
    padding: 20px 0;
`
export const BackgroundImg = styled.img`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 50px;
    z-index: -1;
    width: 300px;
    height: 300px;
`
export const ControlsContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: 0px;
    z-index: -1;
    width: 350px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #D8D4F2;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px;

    @media (max-width: 400px) {
        width: 300px
    }

    p {
        margin: 0 0 10px 0;
        font-size: 18px;
    }

    span {
        font-weight: 700;
        font-size: 20px;
    }

`
export const GameScreenBorder = styled.button`
    width: 325px;
    height: 325px;
    background: #606C79;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`
export const GameScreenDiv = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #7A866C;
    overflow: hidden;
`
export const OverallButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    background-color: #B9BEC5;
    height: 300px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 10px 45px 0 45px;
    grid-template-areas:
        "nav-buttons nav-buttons nav-buttons . b-button"
        "nav-buttons nav-buttons nav-buttons a-button ."
        ". start-and-select-buttons start-and-select-buttons start-and-select-buttons ."
        ". start-and-select-buttons start-and-select-buttons start-and-select-buttons .";

    .a-button {
        grid-area: a-button;
        position: relative;
    }

    .b-button {
        grid-area: b-button;
        position: relative;
    }

    .a-button span, .b-button span {
        position: absolute;
        bottom: -10px;
        left: 52px;
    }

    .a-button, .b-button {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 26px;
        font-weight: 700;
    }

    button {
        box-sizing: border-box;
        border: 0;
        display: flex;
        transition: 0.2s background;
        justify-content: center;
        align-items: center;
        gap: 0.6em;
        font-weight: bold;
        margin: 0px auto;
        width: 55px;
        height: 55px;
        border-radius: 50px;
        background: #762057;
        padding: 10px;
        transition: all .1s;
        font-size: 26px !important;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    }

    button:focus {
        outline: none;
    }

    .start-button, .select-button {
        position: relative;
    }

    .start-button span, .select-button span {
        position: absolute;
        font-size: 18px;
        top: 35px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    }

    .start-button span {
        left: 10px
    }

    .select-button span {
        left: 5px;

    }

    .start-button img, .select-button img {
        position: absolute;
        width: 30px;
        filter: invert(24%) sepia(10%) saturate(1308%) hue-rotate(172deg) brightness(102%) contrast(89%);
    }

    .start-button img {
        left: 65px
    }

    .select-button img {
        right: 65px
    }

    button:not(.up) {
        box-shadow: 0px 6px 0px black;
    }

    button:active, button.active {
        position: relative;
        transform: scale(0.98) translateY(5px)
    }

    button:active:not(.up), button.active:not(.up) {
        box-shadow: 0px 2px 0px black;

    }

    button:hover {
        cursor: pointer;
    }
`
export const StartAndSelectButtonsContainer = styled.div`
    grid-area: start-and-select-buttons;
    display: flex;
    justify-content: center;
    gap: 40px;
    align-items: flex-start;
    padding-top: 40px;
    background: yelllow;
    button {
        height: 10px;
        background: #606C79;
        margin: 0;
    }
`
export const NavButtonsContainer = styled.div`
    grid-area: nav-buttons;
    width: 120px;
    height: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        ". up ."
        "left center-container right"
        ". down .";

    button {
        width: 100%;
        height: 100%;
        background: #222627;
        border-radius: 0;
        z-index: 1
    }

    .center-container {
        box-sizing: border-box;
        grid-area: center-container;
        width: 100%;
        height: 100%;
        background: #222627;
        justify-self: center;
        align-self: center;
        outline: 1px solid #222627;
        z-index: 2
    }

    &:active, button.active {
        opacity: .90
    }

    button.left {
        grid-area: left;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    button.left:active, .left.active {
        transform: translateY(1px) translateX(1px);
    }

    button.right {
        grid-area: right;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    button.right:active, .right.active {
        transform: translateY(1px) translateX(-1px);
    }

    button.up {
        grid-area: up;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    button.up:active, .up.active {
        transform: translateY(2px);
    }

    button.down {
        grid-area: down;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        position: relative;
    }

    button.down:active, .down.active {
        transform: translateY(2px);
    }

    button.down:before {
        width: 40px;
        height: 10px;
        background: #222627;
        position: absolute;
        content: "";
        top: -5px
    }

`
export const BombContainer = styled.div`
    background: white;
    width: 60px;
    height: 60px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
`
