import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SideBarRoute,
    SideBtnWrap,
    SidebarLink,
    SidebarWrapper,
    SidebarMenu
 } from './sidebarElements';
import { SidebarProps } from '../../interfaces/sidebar.interface';
import { useHistory } from 'react-router-dom';

const Sidebar: React.FC<SidebarProps> = ({isOpen, toggle}) => {
    const history = useHistory();

    const handleNavBtnLinkClick = (route: string) => {
    // refresh page after route change
    history.push(route);
    window.location.reload();
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={() => handleNavBtnLinkClick('/about')}>
                    About
                </SidebarLink>
                <SidebarLink to="register" onClick={() => handleNavBtnLinkClick('/register')}>
                    Register
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SideBarRoute to="/login" onClick={() => handleNavBtnLinkClick('/login')}>
                    Sign In
                </SideBarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
  
};

export default Sidebar;