import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.background};
  transition: all 0.2s ease-in-out;
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
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
  gap: 48px;
  align-items: center;
  justify-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    gap: 40px;
    grid-template-columns: 1fr;
    grid-template-areas: 'col2' 'col1';
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  display: flex;
  justify-content: center;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 42px;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  max-width: 500px;
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Img = styled.img`
  width: 100%;
  max-width: 360px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.accent};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.2s ease-in-out;
`;

export const BtnContainer = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const BtnWrapper = styled.div``;

export const Button = styled.div`
  border-radius: 50%;
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.fontColor};
  width: clamp(48px, 12vw, 60px);
  height: clamp(48px, 12vw, 60px);
  font-size: clamp(24px, 6vw, 30px);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: translateY(-4px);
  }
`;
