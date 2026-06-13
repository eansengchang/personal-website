import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ theme, $primary }) => ($primary ? theme.accent : '#010606')};

  white-space: nowrap;
  padding: ${({ $big }) => ($big ? '14px 48px' : '13px 34px')};

  color: ${({ $dark }) => ($dark ? '#010606' : '#fff')};

  font-size: ${({ $fontBig }) => ($fontBig ? '20px' : '17px')};
  font-weight: 600;

  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 24px rgba(1, 191, 113, 0.35);
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme, $primary }) =>
      $primary ? theme.accentHover : theme.accent};
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(1, 191, 113, 0.45);
  }
`;
