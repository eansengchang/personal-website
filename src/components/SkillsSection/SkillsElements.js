import styled from 'styled-components';

export const SkillsContainer = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
  padding: 80px 0;
`;
export const SkillsWrapper = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
export const SkillsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 12px;

  justify-content: space-around;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  }
`;
export const SkillBox = styled.div`
  font-size: 16px;
  padding: 18px 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border-radius: 14px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.cardBg};
    box-shadow: ${({ theme }) => theme.shadow};
    transform: translateY(-4px);
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
export const SkillName = styled.div`
  text-align: center;
`;
export const SkillLogo = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 64px;
  transition: color 0.2s ease-in-out;

  ${SkillBox}:hover & {
    color: ${({ theme }) => theme.accent};
  }

  @media screen and (max-width: 480px) {
    font-size: 52px;
  }
`;
