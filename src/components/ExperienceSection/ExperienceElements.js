import styled from 'styled-components';

export const ExperiencesContainer = styled.div`
  color: #fff;
  background: ${({ theme }) => theme.background};
  transition: all 0.2s ease-in-out;
  padding: 50px 20px;

  @media screen and (max-width: 768px) {
    padding-top: 200px;
  }
`;

export const ExperienceContainer = styled.div`
  padding: 60px 5px;
`;

export const ExperienceWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  ${'' /* padding: 20px; */}
  justify-content: center;
  border-radius: 25px;
  background: ${({ theme }) => theme.colorTwo};
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 5px gray;
`;

export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  transition: all 0.2s ease-in-out;
  height: 100%;
  padding: 20px;
`;

export const Column2 = styled.div`
  border-radius: 25px;

  padding: 5px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  height: 100%;
  display: grid;
  align-content: space-evenly;
`;

export const ExperienceName = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
  margin-bottom: 24px;
  margin-top: 24px;
  font-size: 26px;
  line-height: 1.1;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
`;

export const TechUsed = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 24px;
  color: #777777;
  ${'' /* text-align: center; */}
`;

export const ImageWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  align-content: center;

  align-self: center;
  height: 360px;
  width: 360px;
  object-fit: contain;
  outline: none;

  overflow: hidden;

  border-radius: 50%;
`;
