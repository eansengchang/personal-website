import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
  padding: 80px 20px;
`;

export const ProjectContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProjectWrapper = styled.div`
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

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
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

  @media screen and (max-width: 768px) {
    padding: 24px 24px 0;
  }
`;

export const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProjectName = styled.h2`
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
  margin-bottom: 16px;
  font-size: 28px;
  line-height: 1.2;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
`;

export const TechUsed = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SkillTag = styled.span`
  font-size: 14px;
  padding: 5px 12px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colorOne};
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid ${({ theme }) => theme.border};
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const BtnWrapper = styled.div`
  width: fit-content;
`;

export const Button = styled.div`
  border-radius: 10px;
  background: ${({ theme, $primary }) =>
    $primary ? theme.accent : 'transparent'};
  border: 1px solid
    ${({ theme, $primary }) => ($primary ? theme.accent : theme.border)};

  white-space: nowrap;
  padding: 11px 26px;

  color: ${({ theme, $primary }) => ($primary ? '#fff' : theme.fontColor)};

  font-size: 16px;
  font-weight: 600;

  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme, $primary }) =>
      $primary ? theme.accentHover : theme.accent};
    border-color: ${({ theme, $primary }) =>
      $primary ? theme.accentHover : theme.accent};
    color: #fff;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 14px;
  background: ${({ theme }) => theme.colorOne};
  border: 1px solid ${({ theme }) => theme.border};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 320px;
  object-fit: contain;
  outline: none;

  @media screen and (max-width: 480px) {
    height: 220px;
  }
`;
