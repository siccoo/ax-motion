import styled from "styled-components";
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
    opacity: ${({isOpen}) => (isOpen ? "100%" : "0")};
    top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
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