import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from 'react-icons/ai';
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
                  Hey! My name is Ean Seng Chang and I'm a third year university
                  student studying mathematics and computer science in Oxford. I enjoy
                  programming in Python, Java and Javascript. I look forward to continue to learn and apply
                  new skills in programming to improve my ability and develop
                  more amazing programs in the future.
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
              <Img src={require('../../images/profile.png')} alt="My Profile" />
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
