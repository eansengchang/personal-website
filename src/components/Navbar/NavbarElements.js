import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.navColor};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.fontColor};

  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: background 0.3s ease, border-color 0.3s ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: ${({ theme }) => theme.fontColor};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.fontColor};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: ${({ theme }) => theme.fontColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }
`;
