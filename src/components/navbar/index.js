import React from 'react';
import { FaBars } from "react-icons/fa"
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import AXLogo from "../../assets/images/ax-logo.jpeg";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <img src={AXLogo} alt='ax-logo' className='ax-logo' style={{ width: 100 + "px" }} />
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">Facebook</NavLinks>
                            <NavLinks to="/">LinkedIn</NavLinks>
                            <NavLinks to="/">Youtube</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
