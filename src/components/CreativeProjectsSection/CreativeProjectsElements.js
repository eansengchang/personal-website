import styled from 'styled-components';

export const CreativeProjectsContainer = styled.div`
  color: #fff;
  background: ${({ theme }) => theme.background};
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    padding-top: 200px;
  }
`;
export const CreativeProjectsWrapper = styled.div`
  margin-top: 100px;
  padding-bottom: 100px;
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;
export const CreativeProjectGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fill, 300px);
  padding: 10px;

  justify-content: space-around;
`;

export const CreativeProjectContainer = styled.div`
  font-size: 16px;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colorOne};
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
  border-radius: 10px;

  box-shadow: 0 0 5px gray;
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 10px;
`;

export const TextWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  margin-left: 10px;
  height: 2.5rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: DeepSkyBlue;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;
