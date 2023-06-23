import styled, { StyledComponent } from "styled-components";
import { Link as LinkR} from "react-router-dom";

export const Nav: StyledComponent<"nav", any, {}, never> = styled.nav`
    background: #000;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    margin-bottom: 50px;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }  
`;

export const NavbarContainer: StyledComponent<"div", any, {}, never> = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo: StyledComponent<typeof LinkR, any, {}, never> = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover{
        font-weight: bold;
        color: #349CFE;
        border-bottom: 1px sold #349CFE;
        transition: 0.2s all ease-in-out;
    }
`;

export const MobileIcon: StyledComponent<"div", any, {}, never> = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }

    &:hover{
        background: #349CFE;
        border-radius: 2px;
        transition: 0.2s all ease-in-out;
    }
`;

export const NavMenu: StyledComponent<"ul", any, {}, never> = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem: StyledComponent<"li", any, {}, never> = styled.li`
    height: 80px;
`;


export const NavLinks: StyledComponent<typeof LinkR, any, {}, never> = styled(LinkR)`
    color: #fff;
    margin-right: 25px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    // Setting active of parent element
    &:hover{
        color: #349CFE;
        transition: 0.2s all ease-in-out;
    }
`;

export const NavBtn: StyledComponent<"nav",  any, {}, never> = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink: StyledComponent<typeof LinkR, any, {}, never>  = styled(LinkR)`
    border-radius: 50px;
    background: #349CFE;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #349CFE;
    }
`;
