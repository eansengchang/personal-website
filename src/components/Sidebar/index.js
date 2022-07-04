import React, { useContext } from 'react';
import { UserContext } from '../../contexts/User';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from './SidebarElements';

import {
  ToggleContainer,
  ToggleWrapper,
  ToggleSwitch,
  Checkbox,
  Label,
  Inner,
  Switch,
} from '../Navbar/NavbarElements';

const Sidebar = ({ isOpen, toggle }) => {
  const [state, dispatch] = React.useContext(UserContext);

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={toggle}
            spy={true}
            smooth={true}
            offset={-80}
            duration={300}
            exact="true"
          >
            About
          </SidebarLink>
          <SidebarLink
            to="skills"
            onClick={toggle}
            spy={true}
            smooth={true}
            offset={-80}
            duration={300}
            exact="true"
          >
            Skills
          </SidebarLink>
          <SidebarLink
            to="projects"
            onClick={toggle}
            spy={true}
            smooth={true}
            offset={-80}
            duration={300}
            exact="true"
          >
            Portfolio
          </SidebarLink>
          {/* <SidebarLink
            to="contact"
            onClick={toggle}
            spy={true}
            smooth={true}
            offset={-80}
            duration={300}
            exact="true"
          >
            Contact
          </SidebarLink> */}
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
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
