import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.navColor};
  padding: 30px 0px;
`;
export const FooterWrapper = styled.div`
  text-align: right;
  color: ${({ theme }) => theme.fontColor};
  max-width: 1100px;
  width: 100%;
  font-size: 16px;
`;
