import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  margin: auto 20px;
  height: 100%;
`;

export const ToggleWrapper = styled.div`
  display: grid;
  margin: auto;
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
  margin-left: ${({ theme }) => (theme.isDark ? '0' : 'initial')};
  right: ${({ theme }) => (theme.isDark ? '0' : 'initial')};
`;

export const Inner = styled.span`
  display: block;
  width: 200%;
  margin-left: ${({ theme }) => (theme.isDark ? '0' : '-100%')};
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
  right: ${({ theme }) => (theme.isDark ? '0px' : '60px')};
  border: 0 solid #bbb;
  border-radius: 20px;
  transition: all 0.1s ease-in 0s;
`;
