import { createGlobalStyle } from "styled-components";
import bg from "../../assets/images/virtual-reality/vaporWaveBackground.png";

const GlobalStyle = createGlobalStyle`
    &:root {
        --ff-primary: 'Caveat Brush', cursive;
    }

    html, body {
        line-height: 1.6;
        font-family: var(--ff-primary);
    }

    body {
        background: black;
        width: 100vw;
        height: 100vh;
        margin: 0;
        background-image: url(${bg});
        background-size: cover ;
        background-attachment: fixed;
        background-position: 50% 100%;
        background-repeat: repeat;
        font-family: 'Orbitron', sans-serif;
    }
`
export default GlobalStyle