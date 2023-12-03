import styled from 'styled-components'

export const Container = styled.div`
    background: #292626;
    font-family: 'Inter', sans-serif;
    color: skyblue;
    padding: 2rem;
    text-align: center;
`
export const Images = styled.img`
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;

    &:hover {
        filter: drop-shadow(0 0 2em white);
        cursor: pointer;

        @keyframes logo-spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        @media (prefers-reduced-motion: no-preference) {
            animation: logo-spin infinite 5s linear;
        }
    }
`
export const Links = styled.div`
    display: grid;

    a {
        padding: .6em;
        text-decoration: none;
        font-size: 2rem;
        color: beige;
    }
`