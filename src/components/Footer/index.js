import React from 'react';

import { FooterContainer, FooterWrapper, FooterLink } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        © {new Date().getFullYear()} Ean Seng Chang · Made by Ean Seng Chang ·{' '}
        <FooterLink
          href="/dissertation.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Dissertation
        </FooterLink>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
