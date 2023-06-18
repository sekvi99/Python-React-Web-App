import React from 'react';
import { FaBars } from "react-icons/fa";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './navbarElements';
import { ToggleProps } from '../../interfaces/sidebar.interface';
import { useHistory } from 'react-router-dom';

const Navbar: React.FC<ToggleProps> = ({ toggle }) => {
    const history = useHistory();

    const handleNavBtnLinkClick = (route: string) => {
    // refresh page after route change
    history.push(route);
    window.location.reload();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={() => handleNavBtnLinkClick('/')}>Home</NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="about" onClick={() => handleNavBtnLinkClick('/about')}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="register" onClick={() => handleNavBtnLinkClick('/register')}>Register</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="login" onClick={() => handleNavBtnLinkClick('/login')}>
              Sign In
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
