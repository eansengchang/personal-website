import styled from 'styled-components';

export const SkillsContainer = styled.div`
  color: #fff;
  background: ${({ theme }) => theme.background};
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    padding-top: 200px;
  }
`;
export const SkillsWrapper = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;
export const SkillsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  padding: 10px;

  justify-content: space-around;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 80px);
  }
`;
export const SkillBox = styled.div`
  font-size: 16px;
  padding: 5px;

  aspect-ratio: 1 / 1.4;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const SkillName = styled.div`
  text-align: center;
  display: grid;
  justify-content: center;
`;
export const SkillLogo = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  font-size: 80px;

  @media screen and (max-width: 768px) {
    font-size: 60px;
  }
`;
