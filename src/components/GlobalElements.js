import styled from 'styled-components';

export const GlobalH1 = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
  font-size: 42px;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-align: center;
  margin-bottom: 56px;

  ::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    margin: 16px auto 0;
    border-radius: 2px;
    background: ${({ theme }) => theme.accent};
  }

  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 40px;
  }
`;
