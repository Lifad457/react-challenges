import { createGlobalStyle } from "styled-components";
import bg from "../../assets/images/finger-strength/luiz-guimaraes.jpg";

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
        background: lightblue;
        background-image: url(${bg});
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        display: flex;
        justify-content: flex-end;
        padding-right: 75px;
        align-items: center;
        width: 100vw;
        height: 100vh;

        @media (max-width: 450px) {
            justify-content: center;
            padding: 0;
        }
    }
`
export default GlobalStyle