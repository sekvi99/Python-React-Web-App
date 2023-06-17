import React from 'react';
import { FaBars } from "react-icons/fa"; // https://react-icons.github.io/react-icons
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn,
    NavBtnLink } from './navbarElements';

const navbar: React.FC = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">Menu</NavLogo>
                
                <MobileIcon>
                    <FaBars />
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="register">Register</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="login">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default navbar;
