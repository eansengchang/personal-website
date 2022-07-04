import styled from 'styled-components';

export const GlobalH1 = styled.h1`
  color: ${({theme}) => theme.fontColor};
  transition: all 0.2s ease-in-out;
  font-size: 48px;
  text-align: center;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;