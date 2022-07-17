import React from 'react';
import {Link} from 'react-router-dom';
import {
    Background,
    LandingGrid,
    LandingTitle,
    Parrafo,
    ImgWrp,
    Image,
    LandingButton
} from './StyledLandingPage';
import logo from '../../assets/undraw_gaming_re_cma2.svg';

export default function LandingPage() {
    return(
        <Background>
            <div>
                <LandingGrid>
                    <div>
                        <LandingTitle>Welcome to Games World</LandingTitle>
                        <Parrafo>This aplication was designed with the idea of implementing what was learned during the 4 months of the soyHenry Bootcamp. In this application you will find a variety of video games along with their details (platforms, genres, rating, etc), you will have the option to search, filter, sort and create your own video game.</Parrafo>
                        <Link to='/home'>
                            <LandingButton>Press Start</LandingButton>
                        </Link>
                    </div>
                    <ImgWrp>
                        <Image src={logo}/>
                        {/* <p className='text'>Cooming Soon</p> */}
                    </ImgWrp>
                </LandingGrid>
            </div>
        </Background>
    )
}