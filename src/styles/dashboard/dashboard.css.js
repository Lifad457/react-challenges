import styled from "styled-components";
import removeButton from "../../assets/images/dashboard/remove-button-image.svg";

export const WidgetContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        "area-1 area-2 area-3"
        "area-4 area-5 area-6";
    height: 80vh;
    width: 100vw;
`
export const WidgetWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    .Clock {
        background: linear-gradient(to top, #2193b0, #4193b0);
        padding-left: 20px;
    }
`
export const Widget = styled.div`
    width: 230px;
    height: 230px;
    border-radius: 10px;
    background: #11111188;
    position: relative;

    &:hover {
        cursor: grab;
    }

    &:active {
        cursor: grabbing;
    }

    img {
        width: 100%;
        height: 100%;
        z-index: -1;
        user-select: none;
        pointer-events: none;
        border-radius: 10px;
    }

    &.Clock {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        color: white;
        text-shadow: none;
        font-size: 24px;
    }
`
export const ConfigurationMenu = styled.div`
    height: 20vh;
    width: 100vw;
    min-width: 700px;
    display: flex;
    padding: 50px;
    justify-content: space-around;
    align-items: center;
    background: #11111155;
`
export const Month = styled.div`
    margin-bottom: 40px;
`
export const Time = styled.div`
    font-size: 32px;
    width: 100%;
    display: flex;
`
export const Weather = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0;
`
export const TempRangeContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin: 20px 0;

    div {
        text-align: center;
        width: 65px;
        border-radius: 10px;
        padding: 5px;
    }

    div :first-child {
        font-size: 1.5rem;
        margin: 0;
        padding-left: 7px;
    }

    div :last-child {
        font-size: 1rem;
        margin: 0;
    }
`
export const Icon = styled.div`
    margin-top: 1.6rem;
    font-size: 3rem;
`
export const ConditionText = styled.div`
    font-weight: 600;
    font-size: 1.1em;
`
export const Day = styled.div`
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
`
export const LowTemData = styled.div`
    color: #1e91d6;
`
export const HighTemData = styled.div`
    color: #d13440;
`
export const Switch = styled.label`
    font-size: 1rem;
    position: relative;
    display: inline-block;
    width: 4em;
    height: 2em;

    p {
        text-align: center;
        margin-top: 25px;
    }
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
`
export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #eee;
    transition: 0.4s;
    border-radius: 0.5em;
    box-shadow: 0 0.2em #dfd9d9;

    &:before {
        position: absolute;
        content: "";
        height: 1.5em;
        width: 1.4em;
        border-radius: 0.3em;
        left: 0.3em;
        bottom: 0.7em;
        background-color: lightsalmon;
        transition: 0.4s;
        box-shadow: 0 0.4em #bcb4b4;
    }

    input:checked + &:before {
        transform: translateX(2em);
        background: lightgreen;
    }
`
export const RemoveButton = styled.button`
    background: url(${removeButton});
    width: 30px;
    height: 30px;
    border: none;
    position: absolute;
    top: -2px;
    left: -2px;
    opacity: 0.5;
    transition: transform 0.5s;

    &:hover {
        cursor: pointer;
        transform: scale(1.2);
        filter: invert(89%) sepia(4%) saturate(4485%) hue-rotate(352deg)
            brightness(259%) contrast(113%);
    }

    &:active {
        transform: scale(0.92);
        outline: none;
    }

`
export const PushButton = styled.button`
    width: 100px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    color: #382b22;
    padding: 0.75em 0.5em;
    background: #f9c4d2;
    border: 2px solid #b18597;
    border-radius: 0.75em;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: background 150ms cubic-bezier(0, 0, 0.58, 1),
        -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
        background 150ms cubic-bezier(0, 0, 0.58, 1),
        -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);

    &:first-of-type {
        background: lightsalmon;
    }

    &:last-of-type {
        background: lightgreen;
    }

    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
        bottom: 0;
        background: #bcb4b4;
        border-radius: inherit;
        -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
        box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
        -webkit-transform: translate3d(0, 0.75em, -1em);
        transform: translate3d(0, 0.75em, -1em);
        transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
            box-shadow 150ms cubic-bezier(0, 0, 0.58, 1),
            -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1),
            -webkit-box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }

    &::before {
        -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
        box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #333333;
        -webkit-transform: translate3d(0, 0.5em, -1em);
        transform: translate3d(0, 0.5em, -1em);
    }

    &:active {
        -webkit-transform: translate(0em, 0.75em);
        transform: translate(0em, 0.75em);
    }

    &:active::before {
        -webkit-box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
        box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
        -webkit-transform: translate3d(0, 0, -1em);
        transform: translate3d(0, 0, -1em);
    }

    button:focus:not(:focus-visible) {
        outline: none;
    }

`
export const SavedMessageContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    pointer-events: none
`
export const SavedMessage = styled.p`
    color: rgba(105, 211, 142, 0.5);
    font-size: 200px;
    animation: fade 1s linear both;

    @keyframes fade {
        0% { 
            opacity: 1
        }
        100% {
            opacity: 0
        }
    }
`