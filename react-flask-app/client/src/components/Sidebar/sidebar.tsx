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

const sidebar: React.FC<SidebarProps> = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">
                    About
                </SidebarLink>
                <SidebarLink to="register">
                    Register
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SideBarRoute to="/login">
                    Sign In
                </SideBarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
  
};

export default sidebar;