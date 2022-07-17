import styled from "styled-components";
import {AiOutlineRollback} from 'react-icons/ai';

export const BackgroundDetail = styled.div`
    background-color: ${(props) => props.theme.background};
    padding: 1rem;

    @media screen and (max-width: 960px) {
        height: 160vh;
    }
`

export const ImageDetail = styled.img`
    width: 90%;
    margin-left: 20px;
    border-radius: 3px;
`

export const TitleDetail = styled.h1`
    color: ${(props) => props.theme.secondary};   
    font-size: 2rem;
    text-align: center;
`

export const ContainerDetail = styled.div`
    background-color: ${(props) => props.theme.primary};
    padding: 5px;
    border-radius: 3px;
    margin-top: 10px;

    @media screen and (max-width: 960px) {
        padding: 15px;
    }
`

export const GridDetail = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 25px;
    margin-right: 42px;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        text-align: center;
    }
`

export const Platform = styled.h2`
    font-size: 18px;
    color: ${(props) => props.theme.secondary};
    margin-right: 20px;

    @media screen and (max-width: 960px) {
        text-align: center;
        margin: 0;
        margin-top: 10px;
    }
`

export const Rating = styled.h2`
    font-size: 20px;
    color: ${(props) => props.theme.secondary};
`

export const Genre = styled.h2`
    font-size: 20px;
    color: ${(props) => props.theme.secondary};

    @media screen and (max-width: 960px) {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 25px;
        text-align: center;
    }
`

export const Text = styled.p`
    font-size: 17px;
    color: ${(props) => props.theme.secondary};
    margin-right: 20px;

    @media screen and (max-width: 960px) {
        text-align: center;
        margin: 0;
        margin-top: 10px;
    }
`

export const Released = styled.h2`
    font-size: 18px;
    color: ${(props) => props.theme.secondary};

    @media screen and (max-width: 960px) {
        text-align: center;
        margin: 0;
        margin-top: 10px;
    }
`

export const ButtonBack = styled(AiOutlineRollback)`
    width: 2em;
    height: 2em;
    cursor: pointer;
`

export const Loading = styled.h2`
    font-size: 50px;
    color: ${(props) => props.theme.secondary};
    text-align: center;
`