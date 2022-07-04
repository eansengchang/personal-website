import React from 'react';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectGrid,
  Column1,
  TextWrapper,
  Subtitle,
  TechUsed,
  BtnContainer,
  BtnWrapper,
  Button,
  Column2,
  ProjectName,
  ImageWrapper,
  Img,
} from './ProjectElements';

const ProjectRow = ({
  title,
  description,
  skills,
  demoLink,
  codeLink,
  image,
}) => {
  return (
    <ProjectContainer>
      <ProjectWrapper>
        <ProjectGrid>
          <Column1>
            <TextWrapper>
              <ProjectName>{title}</ProjectName>
              <Subtitle>{description}</Subtitle>
              <TechUsed>{skills.join(' | ')}</TechUsed>
              <BtnContainer>
                <BtnWrapper>
                  <a href={demoLink} target="_blank" rel="noreferrer">
                    <Button>
                      <AiOutlineLink />
                      &nbsp; Link
                    </Button>
                  </a>
                </BtnWrapper>
                <BtnWrapper>
                  <a href={codeLink} target="_blank" rel="noreferrer">
                    <Button>
                      <AiFillGithub />
                      &nbsp; Code
                    </Button>
                  </a>
                </BtnWrapper>
              </BtnContainer>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImageWrapper>
              <Img src={image} />
            </ImageWrapper>
          </Column2>
        </ProjectGrid>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default ProjectRow;
