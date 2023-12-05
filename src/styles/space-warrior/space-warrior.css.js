import styled from "styled-components";
import bg from "../../assets/images/space-warrior/space-background.png";
import target1 from "../../assets/images/space-warrior/target1.png";
import target2 from "../../assets/images/space-warrior/target2.png";
import target3 from "../../assets/images/space-warrior/target3.png";

export const ScoreBoardContainer = styled.div`
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    height: 150px;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;

    &:hover {
        cursor: default;
    }

    .title {
        font-family: "Press Start 2P", cursive;
        color: #70c7ff;
        font-size: 25px;
        line-height: 1.5em;
        text-align: center;
        }

    .score,
    .timer {
        font-family: "Press Start 2P", cursive;
        color: #f9c4d2;
        font-size: 20px;
        gap: 10px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .display-value {
        color: #fff0f0;
    }
`
export const PlayAreaContainer = styled.div`
    border-radius: 15px;
    background-image: url(${bg});
    background-size: cover;
    background-position: 60% 0%;
    cursor: url(${target1}) 64 64, crosshair;
    margin: 100px auto 0 auto;
    width: 400px;
    height: 500px;
    display: grid;
    padding: 0 20px;
    overflow: hidden;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
        "p0 p1 p2 p3 p4"
        "p5 p6 p7 p8 p9"
        "p10 p11 p12 p13 p14"
        "p15 p16 p17 p18 p19"
        "p20 p21 p22 p23 p24";

    &:active {
      cursor: url(${target3}) 64 64, crosshair !important;
    }

    .rocket,
    .saucer,
    .satellite {
        display: inline-block;
    }

    .rocket {
        transform: rotate(133deg);
    }

    .saucer {
        transform: rotate(18deg);
    }

    .satellite {
        transform: rotate(-40deg);
    }

    .flyDown {
        animation: flyDown 7s linear both;
    }

    .explosion {
        animation: explode 2s linear both;
    }

    .disappear {
        opacity: 0 !important;
    }

    .disappear:hover {
        cursor: url(${target1}) 64 64, crosshair !important;
    }
`
export const ShipContainer = styled.div`
  background: none;
  border: none;
  font-size: 50px;
  width: 100%;
  transition: opacity 1s;

    &:hover {
        cursor: url(${target2}) 64 64, crosshair;
        opacity: 0.85;
    }

    &:active {
        cursor: url(${target3}) 64 64, crosshair;
    }

    &:focus {
        outline: none;
    }

    span {
        filter: brightness(1.2);
    }
 
    @keyframes flyDown {
        0% {
            transform: translateY(-500px);
        }
        100% {
            transform: translateY(1000px);
        }
    }

    @keyframes fade-out {
        0% {
            width: 150px;
            height: 50px;
            font-size: 1em;
        }
        100% {
            width: 0px;
            height: 0px;
            font-size: 0em;
            visibility: hidden;
        }
    }

    @keyframes fade-in {
        0% {
            width: 0px;
            height: 0px;
            font-size: 0em;
        }
        100% {
            width: 150px;
            height: 50px;
            font-size: 1em;
        }
    }
`
export const PlayButton = styled.button`
  display: block;
  margin: 30px auto 0 auto;
  font-family: "Press Start 2P", cursive;
  width: 150px;
  height: 50px;
  font-weight: 600;
  font-size: 1rem;
  line-height: 0.4em;
  color: #382b22;
  padding: 1.25em 2em;
  background: #fff0f0;
  border: 2px solid #b18597;
  border-radius: 0.75em;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: background 150ms cubic-bezier(0, 0, 0.58, 1),
    -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1),
    -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);

    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #f9c4d2;
        border-radius: inherit;
        -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
        box-shadow: 0 0 0 2px black, 0 0.625em 0 0 black;
        -webkit-transform: translate3d(0, 0.75em, -1em);
        transform: translate3d(0, 0.75em, -1em);
        transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
            box-shadow 150ms cubic-bezier(0, 0, 0.58, 1),
            -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1),
            -webkit-box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }

    &:hover {
        cursor: pointer;
        background: #ffe9e9;
        -webkit-transform: translate(0, 0.25em);
        transform: translate(0, 0.25em);
    }

    .playing:hover {
        cursor: not-allowed;
        transform: none !important;
    }

    &:hover::before {
        -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
        box-shadow: 0 0 0 2px black, 0 0.5em 0 0 black;
        -webkit-transform: translate3d(0, 0.5em, -1em);
        transform: translate3d(0, 0.5em, -1em);
    }

    .playing:hover::before {
        box-shadow: none;
        transform: none !important;
    }

    &:active,
    .playing {
        background: #ffe9e9;
        -webkit-transform: translate(0em, 0.75em);
        transform: translate(0em, 0.75em) !important;
    }

    &:active::before,
    .playing::before {
        -webkit-box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
        box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
        -webkit-transform: translate3d(0, 0, -1em);
        transform: translate3d(0, 0, -1em) !important;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    .fade-out {
        animation: fade-out 2s linear both;
    }

    .fade-in {
        animation: fade-in 1s linear both;
    }

    .fade-out:hover {
        cursor: default;
    }
`