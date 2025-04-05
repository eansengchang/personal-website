import React from 'react';
import { UserContext } from '../../contexts/User';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ToggleContainer,
  ToggleWrapper,
  ToggleSwitch,
  Checkbox,
  Label,
  Inner,
  Switch,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [state, dispatch] = React.useContext(UserContext);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Ean Seng Chang</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={300}
                exact="true"
                activeClass="active"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="skills"
                spy={true}
                smooth={true}
                offset={-80}
                duration={300}
                exact="true"
                activeClass="active"
              >
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="experience"
                spy={true}
                smooth={true}
                offset={-80}
                duration={300}
                exact="true"
                activeClass="active"
              >
                Experience
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={300}
                exact="true"
                activeClass="active"
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <ToggleContainer>
                <ToggleWrapper>
                  <ToggleSwitch>
                    <Checkbox />
                    <Label
                      onClick={() => {
                        dispatch({ type: 'toggle_dark_theme' });
                        // console.log(state);
                      }}
                    >
                      <Inner />
                      <Switch></Switch>
                    </Label>
                  </ToggleSwitch>
                </ToggleWrapper>
              </ToggleContainer>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
