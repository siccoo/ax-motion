import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    // margin-top: -80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1400px; 
`

export const NavLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 10px;
`