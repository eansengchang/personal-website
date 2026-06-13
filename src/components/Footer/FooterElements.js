import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.navColor};
  border-top: 1px solid ${({ theme }) => theme.border};
  padding: 32px 24px;
`;
export const FooterWrapper = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.muted};
  max-width: 1100px;
  width: 100%;
  font-size: 15px;
`;
