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
        line-height: 1.6;
        font-family: var(--ff-primary);
    }

    body {
        display: flex;
        justify-content: center;
    }
`
export default GlobalStyle