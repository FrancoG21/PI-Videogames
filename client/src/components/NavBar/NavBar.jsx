import React, { useState } from "react" ;
import { FaBars, FaTimes } from 'react-icons/fa';
import {
    ToggleContainer,
    Nav,
    NavBarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    SunIcon,
    MoonIcon,
    DivNav
} from './StyledNavBar';
import { IconContext } from "react-icons/lib";

export default function NavBar({theme, setTheme}) {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    
    const handleTheme = () => {
        if(theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    const iconTheme =
    theme === 'dark' ? (
        <SunIcon/>
    ) : (
        <MoonIcon/>
    )

    return (
        <IconContext.Provider value={{color:'fff'}}>
            <Nav>
                <NavBarContainer>
                    <DivNav>
                        <NavLogo to='/'>
                            <NavIcon />
                            GAMES WORLD
                        </NavLogo>
                        <ToggleContainer onClick={handleTheme}>{iconTheme}</ToggleContainer>
                    </DivNav>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/home'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/about'>About Me</NavLinks>
                        </NavItem>                        
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </IconContext.Provider>
    )
}


// {`${allDetail[0].type[0].name}`}