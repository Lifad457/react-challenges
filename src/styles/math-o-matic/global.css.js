import { createGlobalStyle } from "styled-components";
import bg from "../../assets/images/math-o-matic/math-background.jpg";

const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* border: solid red 1px; */
    }

    &:root {
        --ff-primary: 'Fredericka the Great', cursive;
    }

    html, body {
        line-height: 1.6;
        font-family: var(--ff-primary);
    }

    body {
        margin: 0;
        background: black;
        background-image: url(${bg});
        background-size: cover;
        background-position: 50% 50%;
        text-shadow: 0px 1px 3px black;
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
        user-select: none;
    }
`
export default GlobalStyle