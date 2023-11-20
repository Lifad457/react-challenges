import styled from "styled-components"
import bg from "../../assets/images/fire-starter/forest-background.png"

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: black;
	user-select: none;
`
export const GameArea = styled.div`
	background-image: url(${bg});
	background-size: cover;
	width: 350px;
	height: 350px;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	overflow: hidden;
`
export const TorchContainer = styled.div`
	position: absolute;
	left: 40px;
	cursor: pointer;
	z-index: 10;
`
export const InnerTorchContainer = styled.div`
	position: relative;
`
export const WoodContainer = styled.div`
	font-size: 100px;
	position: relative;
	z-index: 5;
	margin-right: 40px;
	justify-content: center;
	align-items: flex-end;
`
export const FireContainer = styled.div`
    position: absolute;
	font-size: 130px;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	animation: fade-in 2s linear;
`