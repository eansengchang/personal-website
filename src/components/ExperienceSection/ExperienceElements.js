import styled from 'styled-components';

export const ExperiencesContainer = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
  padding: 80px 20px;
`;

export const ExperienceContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ExperienceWrapper = styled.div`
  z-index: 1;
  width: 100%;
  border-radius: 20px;
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    background 0.2s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.2fr;
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'col2' 'col1';
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  height: 100%;
  padding: 36px;

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;

export const Column2 = styled.div`
  grid-area: col2;
  padding: 36px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 36px 24px 0;
  }
`;

export const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 18px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`;

export const ExperienceName = styled.h2`
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
`;

export const IncomingBadge = styled.span`
  background: ${({ theme }) => theme.accent};
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 999px;
  white-space: nowrap;
`;

export const Subtitle = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;

  li {
    margin-bottom: 8px;
  }
`;

export const TechUsed = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const SkillTag = styled.span`
  font-size: 14px;
  padding: 5px 12px;
  border-radius: 999px;
  background: ${({ theme }) => (theme.isDark ? theme.colorOne : theme.colorOne)};
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid ${({ theme }) => theme.border};
`;

export const ImageWrapper = styled.div`
  width: clamp(140px, 30vw, 220px);
  height: clamp(140px, 30vw, 220px);
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
`;
