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
        user-select: none;
    }
`
export default GlobalStyle