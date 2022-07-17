import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIdGame } from '../../redux/action';
import {
    BackgroundDetail,
    ContainerDetail,
    Flex,
    Genre,
    GridDetail,
    ImageDetail,
    Platform,
    Rating,
    TitleDetail,
    Text,
    Released,
    ButtonBack,
    Loading,
} from './StyledDetail';

export default function Detail(props) {
    const dispatch = useDispatch();
    const details = useSelector((state) => state.detail)

    useEffect(() => {
        dispatch(getIdGame(props.match.params.id))
    }, [dispatch])

    return (
        <BackgroundDetail>
            <Link to='/home'>
                <ButtonBack></ButtonBack>
            </Link>

            <div>
                {
                    details.length > 0 ?
                        <ContainerDetail>
                            <TitleDetail>{`${details[0].name}`}</TitleDetail>
                            <GridDetail>
                                <div>
                                    <ImageDetail src={details[0].image ? details[0].image : details[0].background_image} />

                                    <Flex>
                                        <div>
                                            <Rating>{details[0].rating}</Rating>
                                        </div>
                                        <div>
                                            <Genre>
                                                {
                                                    details[0].genres.length ?
                                                        <div>{details[0].genres[0].name ? details[0].genres.map(genre => genre.name).join(', ') :
                                                            details[0].genres.join(', ')}
                                                        </div> :
                                                        <div>
                                                            There is no gender registered
                                                        </div>
                                                }
                                            </Genre>
                                        </div>
                                    </Flex>
                                </div>
                                <div>
                                    <Text>{details[0].description.replace(/<\/?[^>]+>/gi, '').replace(/&#39;/g, "'")}</Text>

                                    <Platform>
                                        {
                                            details[0].platforms ?
                                                <div>
                                                    {/* {!details[0].createdAtDb ? details[0].platforms + ' ' : details[0].platforms.map(v => v.name + (' '))} */}
                                                    {details[0].platforms[0].name ? details[0].platforms.map(p => p.name).join(', ') : details[0].platforms.join(', ')}
                                                </div> :
                                                <div>
                                                    There are no registered Platforms
                                                </div>
                                        }
                                    </Platform>


                                    <Released>{details[0].released}</Released>
                                </div>
                            </GridDetail>
                        </ContainerDetail>


                        : <Loading>Loading...</Loading>

                }
            </div>

        </BackgroundDetail>
    )
}