import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { IoDocumentTextSharp } from 'react-icons/io5';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  Img,
  BtnContainer,
  BtnWrapper,
  Button,
} from './InfoElements';

const SOCIAL_LINKS = [
  { href: 'https://github.com/eansengchang', label: 'GitHub', icon: AiFillGithub },
  {
    href: 'https://linkedin.com/in/ean-seng-chang',
    label: 'LinkedIn',
    icon: AiFillLinkedin,
  },
  { href: '/Ean_Seng_Chang_CV.pdf', label: 'CV', icon: IoDocumentTextSharp },
  {
    href: 'https://www.instagram.com/eansengchang/?theme=dark',
    label: 'Instagram',
    icon: AiFillInstagram,
  },
];

const InfoSection = () => {
  return (
    <InfoContainer id="about">
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <Heading>About Me</Heading>
              <Subtitle>
                Hey! My name is Ean Seng Chang and I'm a master's university
                student studying mathematics and computer science in Oxford, and
                I'll soon be joining Coinbase as a software engineer. I'm
                proficient in many languages including Python, Java and
                Javascript, and I'm an avid competitive programmer well-versed in
                algorithms and data structures. I've pursued programming projects
                in full-stack development, machine learning, computer vision, and
                web design.
              </Subtitle>
            </TextWrapper>
            <BtnContainer>
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <BtnWrapper key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                  >
                    <Button>
                      <Icon />
                    </Button>
                  </a>
                </BtnWrapper>
              ))}
            </BtnContainer>
          </Column1>
          <Column2>
            <Img src={require('../../images/formal pfp.jpg')} alt="Ean Seng Chang" />
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
