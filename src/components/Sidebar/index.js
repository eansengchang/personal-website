import React from 'react';
import ThemeToggle from '../ThemeToggle';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from './SidebarElements';

const SIDEBAR_LINKS = [
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
];

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer $isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {SIDEBAR_LINKS.map(({ to, label }) => (
            <SidebarLink
              key={to}
              to={to}
              onClick={toggle}
              spy={true}
              smooth={'easeOutQuad'}
              offset={-80}
              duration={200}
              exact="true"
            >
              {label}
            </SidebarLink>
          ))}
          <ThemeToggle />
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
