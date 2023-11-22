import styled from 'styled-components';

export const Wrapper = styled.div`
	background: #3d5a80;
	width: 400px;
	height: 600px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;

    header {
        padding: 20px;
        background: #3d5a80;
        border: none;
        border: none;
    }

    h1, h2 {
        margin: 0;
    }

    h1 {
        color: #D88C9A;
        font-size: 34px
    }

    h2 {
        margin-top: 5px;
        font-size: 18px;
        text-align: center;
        color: #98c1d9;
    }

    header div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }
`
export const HeaderIconContainer = styled.div`
	background: black;
    height: 15px;
	width: 15px;
`
export const HeaderIcon = styled.img`
    height: 28px;
	filter: invert(83%) sepia(10%) saturate(1174%) hue-rotate(170deg) brightness(93%) contrast(81%);
`
export const ToDoListContainer = styled.div`
	padding: 10px 0 20px 0;
	overflow: scroll;
	display: flex;
	flex-direction: column;
	background: #98c1d9;
	height: 350px;
	width: 300px;
	position: relative;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`
export const ToDoListItemContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 25px;

    input {
        margin-right: 5px;
        border-radius: 10px;
    }
`
export const NewItemLabel = styled.label`
	display: flex;
	align-items: center;
	padding-left: 16px;
	margin-top: 5px;
`
export const NewItemInput = styled.input`
	width: 100%;
	height: 100%;
	padding: 10px;
	background: none;
	margin-left: 5px;
	margin-right: 20px;
	font-size: 16px;
	border: none;
	resize: none;
	vertical-align: center;

    &:hover {
        cursor: text;
    }
    &:focus {
        cursor: text;
        background: #EEEEEE83;
        outline: none;
    }
`
export const AddItemIcon = styled.img`
	height: 25px;

    &:hover {
        cursor: pointer;
        filter: invert(69%) sepia(20%) saturate(755%) hue-rotate(300deg) brightness(88%) contrast(92%);
    }
    .faded {
        opacity: 0.2
    }
`
export const CheckBoxLabel = styled.label`
	display: block;
	position: relative;
	cursor: pointer;
	font-size: 16px;
	user-select: none;
	width: 100%;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
`
export const CheckMark = styled.span`
    position: absolute;
    top: 0px;
    bottom: 0;
    margin: auto 0;
    left: -12px;
    height: 25px;
    width: 25px;
    background-color: #E1E2EF;
    border: solid gray 1px;
    border-radius: 4px;
    transform: translateY(-1px);

    &:after {
        content: "";
        position: absolute;
        display: none;
    }
    &:hover {
        background-color: #D88C9A; 
    }
    input:checked ~ &:after {
        display: block;
    }
    &:after {
        left: 0.4rem;
        top: 0.2rem;
        width: 6px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
`
export const ToDoListItemText = styled.p`
    margin-left: 25px;

    .crossed-out {
        text-decoration: line-through
    }
`
export const AllProgressBarsContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: start;
    padding-right: 20px;
`
export const ProgressBarContainer = styled.div`
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    border: 1px solid black;
    height: 2em;
`
export const ProgressBarContent = styled.div`
    height: 100%;
    animation: progress-animation 2s linear both;
`
export const BottomBarContainer = styled.footer``