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
  SkillTag,
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
              <TechUsed>
                {skills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </TechUsed>
              <BtnContainer>
                <BtnWrapper>
                  <a href={demoLink} target="_blank" rel="noreferrer">
                    <Button $primary>
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
              <Img src={image} alt={title} />
            </ImageWrapper>
          </Column2>
        </ProjectGrid>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default ProjectRow;
