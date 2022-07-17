import React from 'react';
import {
    Cards,
    Img,
    Details,
    TitleCard,
    SubtitleCard,
    SubtitleRating,
    DivContent,
    StarIcon,
    DivIcon
} from '../Card/StyledCard';

export default function Card({ image, name, genres, rating, platforms }) {
    return (
        <Cards>
            <Img src={image} alt='game' />
            <Details>
                <TitleCard>{name}</TitleCard>
                {
                    genres.length ?
                        <SubtitleCard>{genres[0].name ? genres.map(genre => genre.name).join(', ') : genres.join(', ')}</SubtitleCard> :
                        <SubtitleCard>There are no genres assigned to the game</SubtitleCard>
                }
                <DivIcon>
                    <SubtitleRating>{rating}</SubtitleRating>
                    <StarIcon/>
                </DivIcon>
                {/* <div>
                        {
                            platforms.length ?
                                <SubtitleCard>{platforms[0].name ? platforms.map(plat => plat.name).join(', ') : platforms.join(', ')}</SubtitleCard> :
                                <SubtitleCard>No hay generos asignado al juego</SubtitleCard>
                        }
                    </div> */}
            </Details>
        </Cards>
    )
}