"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import logo from "../../images/trade-logo.png"
import globeIcon from "../../images/earth.png"
import chevDown from "../../images/chev-down.png"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className='header'>
      <Container>
        <Navbar expand="lg">
          <NavbarBrand href="/">
            <Image src={logo} className='logo' width="auto" height="auto" alt='logo' priority />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Packages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <div className='lang'>
                  <Image src={globeIcon} width="auto" className='img1' height="auto" alt='logo' priority />
                  <span>Eng</span>
                  <Image src={chevDown} width="auto" height="auto" className='img2' alt='logo' priority />
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </header>
  )
}

export default Header