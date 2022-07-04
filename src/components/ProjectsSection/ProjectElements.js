import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  color: #fff;
  background:${({ theme }) => theme.background};
  transition: all 0.2s ease-in-out;
  padding: 50px 20px;

  @media screen and (max-width: 768px) {
    padding-top: 200px;
  }
`;



export const ProjectContainer = styled.div`
  padding: 60px 5px;
`;

export const ProjectWrapper = styled.div`
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
  box-shadow: 0 0 3px black;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`;

export const Column1 = styled.div`
  border-radius: 25px;
  grid-area: col1;
  background: ${({ theme }) => theme.colorOne};
  transition: all 0.2s ease-in-out;
  height: 100%;
  padding: 20px;
`;

export const Column2 = styled.div`
  padding: 20px 5px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  height: 100%;
  display: grid;
  align-content: space-between;
`;

export const ProjectName = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
  margin-bottom: 24px;
  margin-top: 24px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
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

export const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const BtnWrapper = styled.div`
  margin-right: 20px;
  width: fit-content;
  @media screen and (max-width: 768px) {
    margin-right: 0px;
    padding-bottom: 20px;
  }
`;

export const Button = styled.div`
  border-radius: 10px;
  background: #010606;

  white-space: nowrap;
  padding: 12px 30px;

  color: #fff;

  font-size: 16px;

  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #01bf71;
  }
`;

export const ImageWrapper = styled.div``

export const Img = styled.img`
  height: 100%;
  align-content: center;
  width: 100%;
  align-self: center;
  height: 360px;
  object-fit: contain;
  outline: none;
`;
