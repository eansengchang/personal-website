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

const InfoSection = () => {
  return (
    <>
      <InfoContainer id="about">
        <InfoWrapper>
          <InfoRow imgStart={0}>
            <Column1>
              <TextWrapper>
                <Heading>About Me</Heading>
                <Subtitle>
                  Hey! My name is Ean Seng Chang and I'm a master's university
                  student studying mathematics and computer science in Oxford. I'm proficient in many languages including
                  Python, Java and Javascript, and I'm an avid competitive programmer well-versed in algorithms and data structures. 
                  I've pursued programming projects in full-stack development, 
                  machine learning, computer vision, and web design.
                </Subtitle>
              </TextWrapper>
              <BtnContainer>
                <BtnWrapper>
                  <a
                    href="https://github.com/eansengchang"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>
                      <AiFillGithub />
                    </Button>
                  </a>
                </BtnWrapper>
                <BtnWrapper>
                  <a
                    href="https://linkedin.com/in/ean-seng-chang"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>
                      <AiFillLinkedin />
                    </Button>
                  </a>
                </BtnWrapper>
                <BtnWrapper>
                  <a
                    href="/Ean_Seng_Chang_CV.pdf"
                    // href="https://drive.google.com/file/d/12Fl3lryUAuWZywvRuRA5dXR66qQU-GNF/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>
                      <IoDocumentTextSharp />
                    </Button>
                  </a>
                </BtnWrapper>
                <BtnWrapper>
                  <a
                    href="https://www.instagram.com/eansengchang/?theme=dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>
                      <AiFillInstagram />
                    </Button>
                  </a>
                </BtnWrapper>
              </BtnContainer>
            </Column1>
            <Column2>
              <Img src={require('../../images/formal pfp.jpg')} alt="My Profile" />
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
