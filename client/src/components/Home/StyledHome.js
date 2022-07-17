import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {AiFillPlusCircle} from 'react-icons/ai';
import {IoReloadCircle} from 'react-icons/io5';

export const BackgroundHome = styled.div`
    background-color: ${(props) => props.theme.background};
    max-height: 370vh;
    padding: 2rem;

    @media screen and (max-width: 960px){
        max-height: 900vh;
    }
`

export const TitleHome = styled.h1`
    color: ${(props) => props.theme.secondary};
    text-align: center;
    margin: 0;
`

export const ContainerFilter = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    align-items: center;
    z-index: 3;
    text-align: center;
    margin-bottom: 20px;
`

export const FilterOrder = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
    margin-left: 200px;
    margin-right: 200px;
    align-items: center;
    z-index: 3;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`

export const SelectFilter = styled.select`
    font-size: .8rem;
    padding-left: 6px;
    width: 100px;
    background: ${(props) => props.theme.primary};
    color: #fff;
    border-radius: 3px;
    height: 30px;
    line-height: 45px;
    transition: .3s ease all;
    border: 1px solid transparent;

    &:focus {
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 960px) {
        text-align: center;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`

export const ButtonCreate = styled(AiFillPlusCircle)`
    color: ${(props) => props.theme.secondary};
    height: 2em;
    width: 2em;
    cursor: pointer;
`

export const ButtonLoad = styled(IoReloadCircle)`
    color: ${(props) => props.theme.secondary};
    height: 2em;
    width: 2em;
    cursor: pointer;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: .5rem;
    justify-content: center;
    margin-right: 0;

    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(1, 1fr);
        text-align: center;
    }
`

export const LinkCard = styled(Link)`
    width: 100%;
    margin: 0;
    text-decoration: none;
`
