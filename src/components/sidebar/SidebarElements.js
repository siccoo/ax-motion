import styled from "styled-components";
import {Link as LinkR} from "react-router-dom"
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #ffffff;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

export const CloseIcon = styled(FaTimes)`
    color: #0C4271;
`

export const Icon = styled.div`
    position: absolute;
    top: 19px; 
    right: 24px;
    background: transparent;
    font-size: 32px;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #0C4271;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
    color: #0C4271;
    display: flex;
    align-items: center;
    justify-self: center;
    list-style: none;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    font-size: 24px;
    cursor: pointer;

    &:hover {
        color: #0C4271;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 40px;
    background: #0C4271;
    white-space: no-wrap;
    padding: 10px 22px;
    color: #ffffff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ffffff;
        color: #0C4271;
    }
`