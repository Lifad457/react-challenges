import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        user-select: none;
        -webkit-touch-callout: none; 
        -webkit-user-select: none; 
    }

    &:root {
        --ff-primary: 'Inter', sans-serif;
    }

    html, body {
        line-height: 1.6;
        font-family: var(--ff-primary);
    }

    body {
        margin: 0;
        background: #111115;
        background-size: cover;
        background-position: top;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        padding: 40px;
    }
`
export default GlobalStyle