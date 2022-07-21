import styled from 'styled-components';
import {AiOutlineRollback} from 'react-icons/ai';
import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

export const BackgroundAbout = styled.div`
    background-color: ${(props) => props.theme.background};
    height: 100vh;
    padding: 1rem;
`

export const ButtonBack = styled(AiOutlineRollback)`
    width: 2em;
    height: 2em;
    cursor: pointer;
`

export const ContainerAbout = styled.div`
    background: ${(props) => props.theme.card};
    padding: 10px;
    margin: 0 auto;
    margin-top: 20px;
    width: 400px;
    max-height: 100vh;
    text-align: center;
    box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.4);
    -webkit-box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.4);

    @media screen and (max-width: 960px) {
        width: 90%;
    }
`

export const DivAbout = styled.div`
    display: flex;
`

export const ImageAbout = styled.img`
    width: 250px;
    height: 300px;
    border-radius: 10px;
    margin-top: 25px;
    margin-bottom: 5px;
`

export const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`

export const TitleAbout = styled.h1`
    color: ${(props) => props.theme.secondary};
    font-size: 1.5rem;
    margin-top: 5px;
    margin-bottom: 0;
`

export const SubtitleAbout = styled.h2`
    color: ${(props) => props.theme.secondary};
    font-size: 1.2rem;
    margin: 0;
`

export const Contact = styled.h2`
    color: ${(props) => props.theme.secondary};
    font-size: 1.2rem;
    margin: 0;
    margin-top: 5px;
`

export const DivContact = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContainerContact = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
`

export const EmailIcon = styled(HiOutlineMail)`
    color: ${(props) => props.theme.secondary};
    margin-right: 10px;
`

export const LinkedIcon = styled(BsLinkedin)`
    color: ${(props) => props.theme.secondary};
    margin-right: 10px;
`

export const GitHubIcon = styled(BsGithub)`
    color: ${(props) => props.theme.secondary};
    margin-right: 10px;
`

export const ContactLink = styled.a`
    color: ${(props) => props.theme.secondary};
`

export const ButtonCv = styled.button`
    background-color: ${(props) => props.theme.secondary};
    color: #fff;
    padding: 5px;
    margin-top: 10px;
    border-radius: 3px;
`

export const LinkCv = styled.a`
    text-decoration: none;
    color: #fff;
`