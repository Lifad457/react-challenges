import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 320px;
    height: 550px;
    background: rgb(236, 236, 236);
    background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
    background-size: 200%;
    background-position: center;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #2E2E2E;
    border-radius: 10px;

    h1 {
        width: 200px;
        font-size: 20px;
        margin: 30px 0 -20px 0;
        background: #c3cfe2;
        text-align: center;
        padding: 10px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px;
    }

    h1 span {
        filter: contrast(1.5)
    }

    form {
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    label span {
        padding: 5px;
        background: ghostwhite;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px;
        width: 90px;
        text-align: center;
    }

    label:last-of-type {
        margin-bottom: 20px;
    }

    /*********** Baseline, reset styles ***********/
    input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        cursor: pointer;
        width: 200px;
        z-index: 10
    }

    /* Removes default focus */
    input[type="range"]:focus {
        outline: none;
    }

    /******** Chrome, Safari, Opera and Edge Chromium styles ********/
    /* slider track */
    input[type="range"]::-webkit-slider-runnable-track {
        background-color: #a8d2e1;
        border-radius: 0.5rem;
        height: 0.5rem;
    }

    /* slider thumb */
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        /* Override default look */
        appearance: none;
        margin-top: -4px;
        /* Centers thumb on the track */
        background-color: #808080;
        border-radius: 0.5rem;
        height: 1rem;
        width: 1rem;
    }

    input[type="range"]:focus::-webkit-slider-thumb {
        outline: 3px solid #808080;
        outline-offset: 0.125rem;
    }

    /*********** Firefox styles ***********/
    /* slider track */
    input[type="range"]::-moz-range-track {
        background-color: #a8d2e1;
        border-radius: 0.5rem;
        height: 0.5rem;
    }

    /* slider thumb */
    input[type="range"]::-moz-range-thumb {
        background-color: #808080;
        border: none;
        /*Removes extra border that FF applies*/
        border-radius: 0.5rem;
        height: 1rem;
        width: 1rem;
    }

    input[type="range"]:focus::-moz-range-thumb{
        outline: 3px solid #808080;
        outline-offset: 0.125rem;
    }
`
export const ImageContainer = styled.div`
     width: 210px;
     height: 210px;
     background: ghostwhite;
     border-radius: 10px;
     display: flex;
     justify-content: center;
     align-items: center;
     box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`
export const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    object-position: 50% 20%;
    filter: ${props => `
        brightness(${props.$filter.brightness}) 
        contrast(${props.$filter.contrast}) 
        saturate(${props.$filter.saturation})`};
`