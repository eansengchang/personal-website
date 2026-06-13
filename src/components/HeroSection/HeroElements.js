import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 30px 60px;
  min-height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        ${({ theme }) => theme.background + '66'} 0%,
        ${({ theme }) => theme.background} 100%
      ),
      linear-gradient(
        180deg,
        ${({ theme }) => (theme.isDark ? '#000000cc' : '#D9BEC9cc')} 10%,
        transparent 100%
      );
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
  font-size: 52px;
  font-weight: 700;
  letter-spacing: -1px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 20px;
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroSubtitle = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.fontColor};
  opacity: 0.8;
  transition: all 0.2s ease-in-out;
  font-size: 18px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ProfileImg = styled.img`
  width: clamp(180px, 40vw, 280px);
  height: clamp(180px, 40vw, 280px);
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.accent};
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.45);
  margin-bottom: 28px;
  z-index: 3;
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
