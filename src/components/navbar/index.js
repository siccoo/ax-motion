import React from 'react';
import { Nav, NavbarContainer, NavLogo } from './NavbarElements';
import AXLogo from "../../assets/images/ax-logo.jpeg";

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo>
                    <img src={AXLogo} alt='ax-logo' className='ax-logo' style={{ width: 100 + "px"}} />
                </NavLogo>
            </NavbarContainer>
        </Nav>
    </>
    );
};

export default Navbar;
