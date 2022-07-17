import styled from 'styled-components';
import { GiGamepadCross } from 'react-icons/gi';
import {BsSunFill, BsMoon} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/global';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.background};
  z-index: 10;
  .icon {
    color: ${(props) => props.theme.primary};
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

export const Nav = styled.nav `
  background-color: ${(props) => props.theme.primary};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  z-index: 999;
`

export const NavBarContainer = styled(Container) `
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const DivNav = styled.div`
  display: flex;
`

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`

export const NavIcon = styled(GiGamepadCross) `
  margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 61px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${(props) => props.theme.primary};
    padding: 0;
  }
`

export const NavItem = styled.li `
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.secondary};
  }

  @media screen and (max-width: 960px){
    width: 100%;

    &:hover {
      border: none;
    }
  }
`

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }

`

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-right: 40px;
  margin-left: 40px;
`

export const SunIcon = styled(BsSunFill) `
  width: 1.5em;
  height: 1.5em;
`

export const MoonIcon = styled(BsMoon) `
  width: 1.5em;
  height: 1.5em;
`