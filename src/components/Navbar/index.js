import React from 'react';
import { FaBars } from 'react-icons/fa';
import ThemeToggle from '../ThemeToggle';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';

const NAV_LINKS = [
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
];

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Ean Seng Chang</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {NAV_LINKS.map(({ to, label }) => (
            <NavItem key={to}>
              <NavLinks
                to={to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={300}
                exact="true"
                activeClass="active"
              >
                {label}
              </NavLinks>
            </NavItem>
          ))}
          <NavItem>
            <ThemeToggle />
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
