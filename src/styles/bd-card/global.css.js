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
        margin: 0;
        user-select: none;
        background-image: linear-gradient(to top left, #a8edea 0%, #fed6e3 100%);
        background-size: cover;

        h1 {
            font-size: 23px;
            font-weight: 600;
        }

        @media (max-width: 460px) {
            h1 {
                font-size: 18px;
            }
        }

        @media (max-width: 380px) {
            h1 {
                font-size: 15px;
            }
        }

        p {
            margin: -40px 0 10px 0;
            font-size: 17px;
            padding: 20px;
        }
    }
`
export default GlobalStyle