import styled from "styled-components";
import {AiOutlineRollback} from 'react-icons/ai';

export const BackgroundForm = styled.div`
    background-color: ${(props) => props.theme.background};
    padding: 1rem;

    @media screen and (max-width: 960px) {
        height: 140vh;
    }
`

export const TitleForm = styled.h1`
    color: ${(props) => props.theme.secondary};
    text-align: center;
    margin-top: 0;
    text-transform: uppercase;

    @media screen and (max-width: 960px) {
        font-size: 1.5rem;
    }
`

export const Formulario = styled.form`
    background-color: ${(props) => props.theme.primary};
    padding: 2rem;
    border-radius: 5px;
    margin: 0 auto;
    max-width: 1200px;
`

export const Legend = styled.legend`
    text-align: center;
    font-size: 1.2rem;
    color: ${(props) => props.theme.secondary};
    margin-bottom: 2rem;
    display: block;
    text-transform: uppercase;
    font-weight: 700;
`

export const ContainerForm = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const ContainerForm2 = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
`

export const Campo = styled.div`
    margin-bottom: 1rem;
    width: 100%;
`

export const Label = styled.label`
    color: ${(props) => props.theme.secondary};
    font-weight: 700;
    margin-bottom: .5rem;
    display: block;
`

export const Input = styled.input`
    width: 90%;
    padding: .5rem;
    border: none;
    border-radius: .5rem;
    margin-left: 5px;
`

export const Select = styled.select`
    background-color: #fff;
    font-family: 'Roboto Condensed', sans-serif;
    color: ${(props) => props.theme.primary};
    border: 1px solid #8E9097;
    border-radius: 5px;
    height: 30px;
    width: 100%;
    padding-left: 2%;
    margin-top: 2%;
    margin-bottom: 1%;
    line-height: inherit;
    outline: none;
    text-align: center;
    font-size: 15px;
`

export const DivSubmit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SubmitButton = styled.button`
    background-color: #fff;
    color: ${(props) => props.theme.primary};
    font-family: 'Arial', sans-serif;
    border: 1px solid ${(props) => props.theme.primary};
    padding: 5px;
    margin-top: 20px;
    border-radius: 3px;
    
    &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.secondary};
        transition: all .6s linear;
        color: #fff;
        border: 1.5px solid ${(props) => props.theme.secondary};
    }
`

export const ButtonBack = styled(AiOutlineRollback)`
    width: 2em;
    height: 2em;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 20px;

    @media screen and (max-width: 960px) {
        margin: 0;
    }
`

export const DivSelect = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Errors = styled.p`
    color: red;
    font-weight: 700;
    margin-top: 0;

    @media screen and (max-width: 960px) {
        text-align: center;
    }
`

export const ButtonQuit = styled.button`
    background-color: #fff;
    color: ${(props) => props.theme.primary};
    font-family: 'Arial', sans-serif;
    border: 1px solid ${(props) => props.theme.primary};
    padding: 5px;
    margin-top: 10px;
    margin-right: 5px;
    border-radius: 3px;
    width: 30px;
    height: 30px;
`

export const DivSelectForm = styled.div`
    display: flex;
`

export const ItemSelect = styled.p`
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 0;
`