import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.png';
import {
    BackgroundAbout,
    ContainerAbout,
    ButtonBack,
    ImageAbout,
    DivAbout,
    TitleAbout,
    DivContent,
    SubtitleAbout,
    Contact,
    DivContact,
    EmailIcon,
    LinkedIcon,
    GitHubIcon,
    ContainerContact,
    ContactLink,
    ButtonCv
} from './StyledAbout';

export default function About() {

    return (
        <BackgroundAbout>
            <Link to='/home'>
                <ButtonBack></ButtonBack>
            </Link>
            <ContainerAbout>
                <ImageAbout src={profile} alt='profile' />
                <TitleAbout>Franco Ramiro Gimenez</TitleAbout>
                <SubtitleAbout>Full Stack Developer</SubtitleAbout>
                <ButtonCv>Download CV</ButtonCv>
                <Contact>Contact:</Contact>
                <DivContact>
                    <ContainerContact>
                        <EmailIcon />
                        <ContactLink href='' target='_blank'>fgimenez029@gmail.com</ContactLink>
                    </ContainerContact>
                    <ContainerContact>
                        <LinkedIcon />
                        <ContactLink href='https://www.linkedin.com/in/franco-gimenez-dev/' target='_blank'>LinkedIn</ContactLink>
                    </ContainerContact>
                    <ContainerContact>
                        <GitHubIcon />
                        <ContactLink href='https://github.com/FrancoG21' target='_blank'>Github</ContactLink>
                    </ContainerContact>
                </DivContact>
            </ContainerAbout>
        </BackgroundAbout>
    )
}