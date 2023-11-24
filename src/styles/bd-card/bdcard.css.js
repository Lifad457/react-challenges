import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
     height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
     padding-top: 60px;

     header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        background: #1E1E1Ed5;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #B5CEA8;
        height: 80px;
    }

    @media (max-height: 530px) {
        padding: 0;
    
        header {
            display: none;
        }
    }


    img {
        width: 90%;
        margin-left: 5px;
        object-fit: cover;
        pointer-events: none;
    }

    .inner-img {
        width: 95%;
        margin-top: 40px;
        margin-left: 10px;
    }
    
    .balloon {
        position: absolute;
        font-size: 32px;
        left: 0;
        bottom: 0;
        animation: float 60s alternate infinite;
        animation-timing-function: ease-in-out	
        
    }

    @keyframes float {
        0% {
            left: 10px;
            bottom: 30px 
        }
        20% {
            left: 150px;
            bottom: 100px;
        }
        40% {
            left: 10px;
            bottom: 65px;
        }
        60% {
            left: 140px;
            bottom: 50px;
        }
        80% {
            left: 40px;
            bottom: 100px;
        }
        100% {
            left: 80px;
            bottom: 70px;
        }
    }
`
export const Card = styled.div`
    transform: scale(1.4);
    position: relative;
    border-radius: 10px;
    width: 220px;
    height: 300px;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    -webkit-perspective: 2000px;
    perspective: 2000px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #000;
    background: #1E1E1E;
    box-sizing: content-box;
    margin-top: 20px;
    
    .green {
        color: #B5CEA8 
    }

    .blue {
        color: #9CDCFD;
    }

    .pink {
        color: #D96FD5 
    }

    @media (max-height: 530px) {
        margin-top: 0
    }

    .open {
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        -webkit-transform: rotatey(-80deg);
        -ms-transform: rotatey(-80deg);
        transform: rotatey(-84deg);
        box-shadow: none;
    }
`
export const Cover = styled.div`
     border: 10px solid white;
     top: 0;
     position: absolute;
     width: 100%;
     height: 100%;
     border-radius: 10px;
     cursor: pointer;
     transition: all 0.5s;
     transform-origin: 0;
     box-shadow: 1px 1px 12px #000;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background: #1E1E1E;

    &:active {
        cursor: w-resize 
    }
`