import styled from "styled-components";

export const Container = styled.div`
    p {
        padding: 0 10px;
        margin: 0;
        text-align: left;
    }

    ol {
        text-align: left;
    }

    p, li {
        color: #555555;
    }

    p {
        line-height: 1.4em 
    }

    li {
        line-height: 2.2em 
    }

    ol {
        list-style:none;
        margin:0;
        padding:0;
        counter-reset:list;
        margin-left: 20px;
    }

    ol li {
        margin:0 0 5px;
        padding:5px;
    }

    ol li:before {
        counter-increment:list;
        content:counter(list, lower-alpha) ") ";
        color: #e76f51;
        margin-right: 10px;
    }
`
export const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #11111195;
    color: #9BFFFE;
    text-align: center;
    padding: 0 20px;

    img {
        width: 50px;
        filter: invert(86%) sepia(17%) saturate(7255%) hue-rotate(204deg) brightness(103%) contrast(105%);
    }
`
export const FlashCard = styled.div`
    background-color: transparent;
    height: 200px;
    width: 300px;
    perspective: 1000px;

    &:hover {
        cursor: pointer;
    }

    .flipped {
        transform: rotateY(180deg);
    }

    @media (min-height: 330px) {
        margin-top: 80px;
    }
`
export const Para = styled.p`
    font-size: 25px;
    font-weight: 900;
    text-align: center;
    margin: 10px;
    color: black;
`
export const FlashCardInner = styled.div`
    position: relative;
     width: 100%;
     height: 100%;
     text-align: center;
     transition: transform 0.8s;
     transform-style: preserve-3d;
     
     .flipped {
        transform: rotateY(180deg);
    }
`
const FlashCardFrontBack = `
    background: ghostwhite;
    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid #55555555;
    border-radius: 1rem;
    background-image: linear-gradient(180deg, ghostwhite 30px, #F0A4A4 30px, #F0A4A4 32px, transparent 1px), repeating-linear-gradient(180deg, transparent, transparent 25px, #DDD 1px, #DDD 26px);
`
export const FlashCardFront = styled.div`
    ${FlashCardFrontBack}
`
export const FlashCardBack = styled.div`
    ${FlashCardFrontBack}
    transform: rotateY(180deg);
`