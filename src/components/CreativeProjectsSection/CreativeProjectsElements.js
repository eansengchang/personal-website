import styled from 'styled-components';

export const CreativeProjectsContainer = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.2s ease-in-out;
  padding: 80px 0;
`;
export const CreativeProjectsWrapper = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
export const CreativeProjectGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
`;

export const CreativeProjectContainer = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.fontColor};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    background 0.2s ease-in-out;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  ${CreativeProjectContainer}:hover & {
    transform: scale(1.06);
  }
`;

export const TextWrapper = styled.div`
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-weight: 600;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Button = styled.button`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.accent};
  color: #fff;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: background 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.accentHover};
    transform: scale(1.08);
  }
`;
