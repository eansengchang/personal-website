import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

import { IsDark } from '../../contexts/User/';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.navColor};

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
  transition: all 0.5s ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
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
  margin-right: -22px;

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
  text-decorations: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid green;
  }
`;

export const ToggleContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  margin: auto 20px;
  padding: auto;
  height: 100%;
`;
export const ToggleWrapper = styled.div`
  display: grid;
  margin: auto;
  padding: auto;
  text-align: center;
  height: 100%;
`;
export const ToggleSwitch = styled.div`
  position: relative;
  width: 90px;
  display: inline-block;
  text-align: left;
`;
export const Checkbox = styled.div`
  display: none;
`;
export const Label = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #bbb;
  border-radius: 20px;
  margin-left: ${() => (IsDark() ? '0' : 'initial')};
  right: ${() => (IsDark() ? '0' : 'initial')};
`;
export const Inner = styled.span`
  display: block;
  width: 200%;
  margin-left: ${() => (IsDark() ? '0' : '-100%')};
  transition: margin 0.1s ease-in 0s;

  ::before,
  ::after {
    float: left;
    width: 50%;
    height: 28px;
    padding: 0;
    line-height: 28px;
    font-size: 14px;
    color: #fff;
    box-sizing: border-box;
  }
  ::before {
    content: 'DARK';
    padding-left: 10px;
    background-color: #191919;
    color: #fff;
  }
  ::after {
    content: 'LIGHT';
    padding-right: 10px;
    background-color: #bbb;
    color: #000;
    text-align: right;
  }
`;
export const Switch = styled.span`
  display: block;
  width: 20px;
  margin: 5px;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${() => (IsDark() ? '0px' : '60px')};
  border: 0 solid #bbb;
  border-radius: 20px;
  transition: all 0.1s ease-in 0s;
`;
