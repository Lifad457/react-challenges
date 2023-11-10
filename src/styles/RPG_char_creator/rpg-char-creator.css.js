import styled from "styled-components";
// import bg from "../../assets/images/RPG_char_creator/countryside-background.png";
import bg from "/RPG_char_creator/countryside-background.png";

export const Wrapper = styled.div`
    width: 242px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
export const StyledButton = styled.button`
    user-select: none;
    height: 38px;
    width: 95px;
    border: none;
    background: #2AA64D;
    color: lightgray;
    font-size: 18px;
    font-weight: bold;
    transition: 0.2s;
    border-radius: 5px;
    opacity: 1;
    letter-spacing: 1px;
    box-shadow: #494b4b 0px 7px 2px, #000 0px 8px 5px;
    font-family: 'New Rocker', cursive;

    &:hover {
        cursor: pointer;
        opacity: .8
    }

    &:active {
        top: 4px;
        opacity: 1;
        box-shadow: #494b4b 0px 3px 2px, #000 0px 3px 5px;
    }

    &:focus:not(:focus-visible) {
        outline: 0;
    }
`
export const CharacterContainer = styled.div`
	background-image: url(${bg});
	background-size: cover;
	height: 214px;
    width: 100%;
	background-position: 50% 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	border-radius: 10px;
	position: relative;
	border: 8.5px solid #222221;

    img {
        width: 112px;
        margin-left: 29px;
        margin-bottom: 64px;
        filter: brightness(1.4)
    }
`
export const CharacterName = styled.div`
	position: absolute;
	font-size: 13px;
	background: lightgray;
	padding: 5px;
	border-radius: 10px;
	bottom: 34px;
	border: 3px solid black;
`
export const OptionsContainer = styled.div`
	background: #11111162;
	width: 100%;
    height: 100%;
    max-width: 100%;
	color: lightblue;
	height: 191px;
	border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8.5px 0;
    padding: 8.5px;

    h3 {
        color: lightgray;
        font-size: 15px;
        margin: 0 0 8.5px 0;
    }

    div {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-around;
    }

    ul {
        list-style: none;
        margin: 0;
        height: 100%;
        font-size: 13.5px;
        display: flex;
        flex-direction: column;
        align-content: space-between;
        justify-content: space-between;
        padding: 8.5px;
    }

    ul:last-of-type {
        text-align: right;
    }

    li:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }
`
export const IndivStatBarWrapper = styled.div`

`
export const IndivStatBarContainer = styled.div`
    height: 31.5px;
	width: 64px;
	border: 1px solid black;
	background: lightgray;
	border-radius: 10px;
	overflow: hidden;
`
export const StatBarFill = styled.div`
    background: lightgreen;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
    
    span {
        position: absolute;
        font-size: 15px;
        z-index: 1;
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;
    }
`
export const StatNameContainer = styled.div`
	display: flex;
	justify-content: center;
	color: lightgray;
	margin-top: 5px;
	font-size: 14px;
`
export const OverallStatusBarsContainer = styled.div`
    display: flex;
	gap: 23px;
	margin-top: 10px;
	margin-bottom: 10px;
`