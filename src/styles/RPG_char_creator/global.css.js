import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    &:root {
        --ff-primary: 'New Rocker', cursive;
    }

    html, body {
        line-height: 1.6;
        font-family: var(--ff-primary);
    }

    body {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: start;
        background: #555555;
        width: 100vw;
        height: 100vh;
        padding-top: 5px;
        user-select: none;
    }
`
export default GlobalStyle