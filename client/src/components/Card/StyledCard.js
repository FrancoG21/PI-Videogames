import styled from "styled-components";
import {RiStarSFill} from 'react-icons/ri';

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    max-height: 350px;
    background-color: ${(props) => props.theme.card};
    border-radius: 3px;
    text-align: center;
    justify-content: center;
    margin-left: 55px;
    margin-top: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.4);
    -webkit-box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.4);

    @media screen and (max-width: 960px) {
        width: 100%;
        margin: 0;
        margin-bottom: 30px;
    }
`

export const Img = styled.img`
    width: 93%;
    height: 200px;
    margin-top: 10px;
    margin-left: 10px;
`

export const TitleCard = styled.h1`
    margin: 5px;
    font-size: 22px;
    font-weight: 510;
    color: ${(props) => props.theme.secondary};
`

export const Details = styled.div`
    padding: 20px;
`

export const SubtitleCard = styled.p`
    padding: 2px 4px;
    margin: 0 8px 0 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.theme.font};
`

export const SubtitleRating = styled.h3`
    padding: 2px 4px;
    margin: 0;
    margin-top: 3px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.theme.font};
    text-align: center;
`
export const DivContent = styled.div`
    display: flex;
    align-items: center;
`

export const StarIcon = styled(RiStarSFill)`
    color: #9F44D3;
    height: 1.5em;
    width: 1.5em;
`

export const DivIcon = styled.div`
    display: flex;
    justify-content: center;
`