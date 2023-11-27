import styled from "styled-components";
import bg from "../../assets/images/sonnet-central/kiwihug-3gifzboyZk0-unsplash.jpg";

export const Wrapper = styled.div`
    background: url(${bg});
    font-family: 'Charm', cursive;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 40px;
    width: 100vw;
    min-height: 100vh;

    header {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const SonnetContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .sonnet:not(.sonnet:first-of-type) {
        margin: 50px 0;
    }

    h1 {
        font-size: 60px;
        margin: 0
    }

    h2 {
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    h3 {
        font-size: 40px;
        margin: 0;
        text-align: center;
    }

    p {
        font-size: 20px;
    }

    p:not(.no-results-message) {
        padding-left: 70px;
    }

    .no-results-message {
        font-size: 30px;
        margin-top: -20px;
    }
    
    span {
        background: yellow;
        border-radius: 6px;
        padding: 3px;
    }

`
export const ShakesSpearImageContainer = styled.div`
    position: relative;
`
export const ShakesSpearImage = styled.img`
    width: 250px;
    border-radius: 50px;
`
export const SunglassesImage = styled.img`
    width: 150px;
    position: absolute;
    animation: flyIn 2s linear both;   
`
export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    height: 100px;
    margin-bottom: 40px;
    position: relative;
    
    button, button:focus {
        position: absolute;
        left: 225px;
        font-size: 17px;
        font-weight: 600;
        padding: 10px 25px;
        border-radius: 14px;
        background: #B4A0E5;
        border: none;
        border-bottom: 3px solid rgb(50, 50, 50);
        box-shadow: 0px 1px 6px 0px rgb(158, 129, 254);
        transition: 0.2s;
        transition-timing-function: linear;
        cursor: pointer;
    }

    button:hover {
        opacity: .8;
    }

    button:active {
        transform: translate(0, 0);
        border-bottom: 0px solid rgb(50, 50, 50);
    }

    button:focus:not(:focus-visible) {
        outline: 0;
    }
`
export const InputContainer = styled.div`
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    width: 330px;

    input {
        height: 40px;
        line-height: 28px;
        padding: 0 rem;
        width: 100%;
        padding-left: 25px;
        border: 2px solid transparent;
        border-radius: 8px;
        outline: none;
        background-color: #D9E8D8;
        color: #0d0c22;
        box-shadow: 0 0 5px #C1D9BF, 0 0 0 10px #f5f5f5eb;
        transition: .3s ease;
    }

        input:focus {
            outline: #B4A0E5 2px solid
        }

        input::placeholder {
            color: #777;
        }

        .icon {
            position: absolute;
            left: 5px;
            fill: #777;
            width: 1rem;
            height: 1rem;
        }

        @keyframes flyIn {
            0% {
                left: -150px;
                top: -150px;
            }

            100% {
                left: 55px;
                top: 95px
            }
        }
`