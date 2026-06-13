import React from 'react';

import { FooterContainer, FooterWrapper } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        © {new Date().getFullYear()} Ean Seng Chang · Made by Ean Seng Chang
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
