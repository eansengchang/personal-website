import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  align-self: flex;
  background: ${({ theme }) => theme.background};
  transition: all 0.2s ease-in-out;
  padding: 100px 0px;

  @media screen and (max-width: 768px) {
    padding: 150px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 500px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  ${'' /* grid-template-rows: auto minmax(300px, auto); */}
  align-items: center;
  justify-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding-right: 50px;
  padding-left: 10px;

  justify-content: center;

  grid-area: col2;

  @media screen and (max-width: 768px) {
    padding-right: 10px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 500px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
`;

export const Img = styled.img`
  max-width: 500px;
  min-width: 300px;

  height: 100%;
  padding: 0;
  width: 100%;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    width: 300px;
  }

`;

export const BtnContainer = styled.div`
  align-items: center;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const BtnWrapper = styled.div``;

export const Button = styled.div`
  border-radius: 50px;
  background: transparent;

  white-space: nowrap;

  color: ${({ theme }) => theme.fontColor};
  padding: 0;
  font-size: 50px;

  ${'' /* width: 50px; */}

  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    font-size: 60px;
  }
`;
