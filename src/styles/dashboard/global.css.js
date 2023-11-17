import { createGlobalStyle } from "styled-components";
import bg from "../../assets/images/dashboard/beach-background.jpg";

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
        margin: 0;
        height: 100vh;
        width: 100vh;
        min-width: 1000px;
        background: url(${bg});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
    }
`
export default GlobalStyle