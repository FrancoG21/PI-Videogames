import styled,{ createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.background};
        font-family: "IBM Plex Sans Arabic", sans-serif;
        font-family: "Poppins", sans-serif;
        font-family: "Roboto", sans-serif;
        color: ${props => props.theme.font};
        scroll-behavior: smooth;
    }

    a{
        list-style: none;
    }
    ul{
        list-style: none;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 50px;
    padding-right: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`