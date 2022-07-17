import styled from "styled-components";

export const Background = styled.div `
    background-color: ${(props) => props.theme.background};
    /* background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,60,1) 100%); */
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    position: fixed; 
    top: -60; 
    min-width: 100%;
    min-height: 100vh;
`

export const LandingGrid = styled.div `
    margin-top: 8%;
    margin-left: 6%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;

    @media screen and (max-width: 960px) {
        grid-template-columns: none;
        grid-template-rows: repeat(2, auto);
        text-align: center;
    }
`

export const LandingTitle = styled.h1 `
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-family: 'Source Sans Pro', sans-serif;
    color: ${(props) => props.theme.secondary};

    @media screen and (max-width: 480px) {
        font-size: 24px;
        text-align: center;
    }
`

export const Parrafo = styled.p `
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${(props) => props.theme.secondary};

    @media screen and (max-width: 480px) {
        font-size: 24px;
        text-align: center;
    }
`

export const ImgWrp = styled.div`
    max-width: 555px;
    height: 100%;

    @media screen and (max-width: 960px) {
        grid-row: 2 / 3;
        text-align: center;
    }
`

export const Image = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

    @media screen and (max-width: 960px) {
        width: 80%;
    }
`

export const LandingButton = styled.button`
    background: none;
    border: 2px solid ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.secondary};
    font-family: 'Source Sans Pro', sans-serif;
    text-transform: uppercase;
    padding: 12px 20px;
    min-width: 200px;
    margin: 10px;
    cursor: pointer;
    transition: color 0.4s linear;
    position: relative;

    &:hover {
        color: ${(props) => props.theme.background};
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: ${(props) => props.theme.secondary};
        z-index: -1;
        transition: transform 0.5s;
        transform-origin: 0 0;
        transition-timing-function: cubic-bezier(0.5,1.6,0.4,0.7);
    }

    &::before {
        transform: scaleX(0);
    }
    &:hover::before {
        transform: scaleX(1);    
    }

    @media screen and (max-width: 480px) {
        text-align: center;
    }
`

// .background-landing {
//     background: rgb(2,0,36);
//     background-image: linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%);
//     /* background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,60,1) 100%); */
//     background-repeat: no-repeat;
//     background-size: 100% 100%;
//     background-position: center center;
//     position: fixed; 
//     top: 0; 
//     min-width: 100%;
//     min-height: 100vh;
// }

// .division {
    // margin-top: 8%;
    // margin-left: 6%;
// }

// .grid-landing {
    // display: grid;
    // grid-template-columns: repeat(2, 1fr);
    // column-gap: 5rem;
// } 

// .title-landing {
    // font-family: 'Source Sans Pro', sans-serif;
    // font-size: 2.5rem;
    // color: #000;
// }

// .parrafo {
    // font-size: 1rem;
    // color: #000;
// }

// .btn {
//     background: none;
//     border: 2px solid #000;
//     font-family: 'Source Sans Pro', sans-serif;
//     text-transform: uppercase;
//     padding: 12px 20px;
//     min-width: 200px;
//     margin: 10px;
//     cursor: pointer;
//     transition: color 0.4s linear;
//     position: relative;
// }
// .btn:hover {
//     color: #fff;
// }
// .btn::before {
//     content: '';
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     background: #000;
//     z-index: -1;
//     transition: transform 0.5s;
//     transform-origin: 0 0;
//     transition-timing-function: cubic-bezier(0.5,1.6,0.4,0.7);
// }
// .btn1::before {
//     transform: scaleX(0);
// }
// .btn1:hover::before {
//     transform: scaleX(1);    
// }

// /* .boton-landing {
//     font-family: 'Source Sans Pro', sans-serif;
//     background-color: #000;
//     color: #fff;
//     border-color: #000;
//     border-radius: 2px;
//     transition: all 0.3s linear 0s;
//     padding: 0.5rem;
//     margin: 10px;
// }

// .boton-landing:hover {
//     cursor: pointer;
//     background-color: #fff;
//     color: #000;
//     transform: scale(1.15);
// } */

// .container-landing {
//     height: 400px;
//     width: 400px;
//     border-radius: 4px;
//     place-items: center;
//     grid-template-areas: 'main';
//     overflow: hidden;
//     cursor: pointer;
//     text-decoration: none;
// }

// .card-landing > * {
//     grid-area: main;
// }

// .container-landing > .card-landing {
//     width: 100%;
//     aspect-ratio: 1 / 1;
//     object-fit: cover;
//     transition: transform 400ms, filter 400ms;
// }

// .container-landing > .text {
//     opacity: 0;
//     color: #fff;
//     font-size: 1.8em;
//     transition: opacity 400ms, transform 400ms;
// }

// .container-landing:is(:hover, :focus) > .card-landing {
//     transform: scale(1.1);
//     filter: brightness(0.4);
// }

// .container-landing:is(:hover, :focus) > .text {
//     transform: scale(1.2);
//     opacity: 1;
// }

// /* #020024
// #01002e
// #00003c */


// /* ------------------------- MEDIA QUERIES -------------------------- */
// @media screen and (max-width: 1024px) {
//     body{
//         text-align: center;
//     }

//     .grid-landing {
//         grid-template-rows: repeat(2, auto);
//     }
// }

// @media screen and (max-width: 600px) {
//     body {
//         text-align: center;
//     }

//     .title-landing {
//         text-align: center;
//         font-size: 1.5rem;
//     }


//     .grid-landing {
//         grid-template-rows: repeat(2, auto);
//     }

//     .container-landing {
//         grid-row: 2 / 3;
//         height: 310px;
//         width: 310px;
//     }
// }