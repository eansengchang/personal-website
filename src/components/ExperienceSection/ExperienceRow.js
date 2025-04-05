import React from 'react';
import {
  ExperienceContainer,
  ExperienceWrapper,
  ExperienceGrid,
  Column1,
  TextWrapper,
  Subtitle,
  TechUsed,
  Column2,
  ExperienceName,
  ImageWrapper,
  Img,
} from './ExperienceElements';

const ProjectRow = ({
  title,
  description,
  skills,
  demoLink,
  codeLink,
  image,
}) => {
  return (
    <ExperienceContainer>
      <ExperienceWrapper>
        <ExperienceGrid>
          <Column1>
            <TextWrapper>
              <ExperienceName>{title}</ExperienceName>
              <Subtitle>
                {
                  <ul style={{ paddingLeft: '20px'}}>
                    {description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                }
              </Subtitle>
              <TechUsed>{skills.join(' | ')}</TechUsed>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImageWrapper>
              <Img src={image} />
            </ImageWrapper>
          </Column2>
        </ExperienceGrid>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};

export default ProjectRow;
