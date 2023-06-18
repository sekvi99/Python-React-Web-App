import styled, { StyledComponent } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { SidebarContainerProps } from "../../interfaces/sidebar.interface";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR} from "react-router-dom";

export const SidebarContainer: StyledComponent<"aside", any, SidebarContainerProps, never> = styled.aside<SidebarContainerProps>`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon: StyledComponent<typeof FaTimes, any, {}, never> = styled(FaTimes)`
    color: #fff;

    &:hover{
        background: #349CFE;
        border-radius: 10px;
        transition: 0.2s all ease-in-out;
    }
`;

export const Icon: StyledComponent<"div", any, {}, never> = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper: StyledComponent<"div", any, {}, never> = styled.div`
    color: #fff;

`;

export const SidebarMenu: StyledComponent<"ul", any, {}, never> = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink: StyledComponent<typeof LinkS, any, {}, never> = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #349CFE;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap: StyledComponent<"div", any, {}, never> = styled.div`
    display: flex;
    justify-content: center;
`;

export const SideBarRoute: StyledComponent<typeof LinkR, any, {}, never> = styled(LinkR)`
    border-radius: 50px;
    background: #349CFE;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;;
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