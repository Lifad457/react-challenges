import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    &:root {
        --ff-primary: 'Inter', sans-serif;
    }

    html, body {
        line-height: 1.6;
        font-family: var(--ff-primary);
    }

    body {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #346ABC;
        height: 100vh;
        overflow: hidden;
        user-select: none;
        transform: scale(0.75)
    }
`
export default GlobalStyle