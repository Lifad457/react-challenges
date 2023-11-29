import styled from "styled-components";
import pencilSolid from "../../assets/images/sketch-o-matic/pencil-solid.png";
import pencilSolidFlipped from "../../assets/images/sketch-o-matic/pencil-solid-flipped.png";

export const Wrapper = styled.div`
    background: #297373;
    width: 100vw;
	height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .shake-horizontal {
        -webkit-animation: shake-horizontal 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
                animation: shake-horizontal 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
    }

    @keyframes fade-out {
        0% {
            background: 3333333;
        }
        100% {
            background: #CFCFCF;
        }
    }

    /* ----------------------------------------------
    * Generated by Animista on 2023-3-26 12:51:12
    * Licensed under FreeBSD License.
    * See http://animista.net/license for more info. 
    * w: http://animista.net, t: @cssanimista
    * ---------------------------------------------- */

    /**
    * ----------------------------------------
    * animation shake-horizontal
    * ----------------------------------------
    */
    @-webkit-keyframes shake-horizontal {
    0%,
    100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
        -webkit-transform: translateX(-10px);
                transform: translateX(-10px);
    }
    20%,
    40%,
    60% {
        -webkit-transform: translateX(10px);
                transform: translateX(10px);
    }
    80% {
        -webkit-transform: translateX(8px);
                transform: translateX(8px);
    }
    90% {
        -webkit-transform: translateX(-8px);
                transform: translateX(-8px);
    }
    }
    @keyframes shake-horizontal {
    0%,
    100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
        -webkit-transform: translateX(-10px);
                transform: translateX(-10px);
    }
    20%,
    40%,
    60% {
        -webkit-transform: translateX(10px);
                transform: translateX(10px);
    }
    80% {
        -webkit-transform: translateX(8px);
                transform: translateX(8px);
    }
    90% {
        -webkit-transform: translateX(-8px);
                transform: translateX(-8px);
    }
    }
`
export const Container = styled.div`
    margin: 0;
	display: flex;
    width: 400px;
    height: 450px;
    flex-direction: column;
	justify-content: flex-start;
	align-items: center;
    border-radius: 20px;
    background: hsla(359, 70%, 37%, 1);
    background: linear-gradient(150deg, hsla(359, 70%, 37%, 1) 0%, hsla(355, 97%, 36%, 1) 37%, hsla(355, 94%, 30%, 1) 100%);
    background: -moz-linear-gradient(0deg, hsla(359, 70%, 37%, 1) 0%, hsla(355, 97%, 36%, 1) 37%, hsla(355, 94%, 30%, 1) 100%);
    background: -webkit-linear-gradient(0deg, hsla(359, 70%, 37%, 1) 0%, hsla(355, 97%, 36%, 1) 37%, hsla(355, 94%, 30%, 1) 100%);
    box-shadow: 1px 2px 4px 3px black;

    h1 {
        margin: 15px;
        text-align: center;
        color: #ffd700;
        font-family: cursive;
        font-weight: 800;
        font-size: 40px;
    }
`
export const Canvas = styled.div`
    box-sizing: content-box;
    border: 2px solid black;
	width: 300px;
	height: 300px;
	display: flex;
	flex-wrap: wrap;
	border-radius: 15px;
	overflow: hidden;
	user-select: none;

    .draw {
        cursor: url(${pencilSolid}) 0 24, auto;
    }

    .erase {
        cursor: url(${pencilSolidFlipped}) 0 24, auto;
    }

    .pixel {
        width: 5px;
        height: 5px;
    }

    .empty {
        background: #CFCFCF;
    }

    .filled {
        background: #333333;
    }

    .fade-out > .filled {
        animation: fade-out .5s linear both;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

    button {
        border-radius: 50px;
        height: 50px;
        width: 50px;
        margin-top: 12px;
        font-size: 13px;
        border: 3px solid black;
        border-style: ridge; 
        background: #f9f9f9;
        box-shadow: 1px 1px 2px 1px black;
    }
    &:hover {
        cursor: pointer;
        filter:brightness(.9);
    }

    &:focus:not(:focus-visible) {
        outline: 0;
    }
`