import React from 'react';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

import {
  CreativeProjectContainer,
  ImageWrapper,
  Image,
  TextWrapper,
  Button,
  ButtonsWrapper,
} from './CreativeProjectsElements';

const CreativeProject = ({ text, image, demoLink, codeLink }) => {
  return (
    <CreativeProjectContainer>
      <a href={demoLink} target="_blank" rel="noreferrer">
        <ImageWrapper>
          <Image src={image} />
        </ImageWrapper>
      </a>
      <TextWrapper>
        {text}
        <ButtonsWrapper>
          <a href={demoLink} target="_blank" rel="noreferrer">
            <Button>
              <AiOutlineLink />
            </Button>
          </a>
          <a href={codeLink} target="_blank" rel="noreferrer">
            <Button>
              <AiFillGithub />
            </Button>
          </a>
        </ButtonsWrapper>
      </TextWrapper>
    </CreativeProjectContainer>
  );
};

export default CreativeProject;
