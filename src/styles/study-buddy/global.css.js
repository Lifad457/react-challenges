import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    &:root {
        --ff-primary: 'Caveat Brush', cursive;
    }

    html, body {
        line-height: 1.6;
        font-family: var(--ff-primary);
    }

    body {
        margin: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(to bottom, #5ee7df 0%, #b490ca 100%);
        background-size: 100% 250%;
        background-position: 0 90%;
        user-select: none;
    }
`
export default GlobalStyle