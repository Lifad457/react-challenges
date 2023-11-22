import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* border: solid red 1px; */
    }

    &:root {
        --ff-primary: 'Inter', sans-serif;
    }

    html, body {
        font-family: var(--ff-primary);
    }

    body {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: #9EA3B0;
        color: #090C02;
    }
`
export default GlobalStyle