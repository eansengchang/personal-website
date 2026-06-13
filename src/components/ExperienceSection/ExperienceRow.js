import React from 'react';
import {
  ExperienceContainer,
  ExperienceWrapper,
  ExperienceGrid,
  Column1,
  TextWrapper,
  Subtitle,
  TechUsed,
  SkillTag,
  Column2,
  ExperienceName,
  TitleRow,
  IncomingBadge,
  ImageWrapper,
  Img,
} from './ExperienceElements';

const ExperienceRow = ({ title, description, skills, image, incoming }) => {
  return (
    <ExperienceContainer>
      <ExperienceWrapper>
        <ExperienceGrid>
          <Column1>
            <TextWrapper>
              <TitleRow>
                <ExperienceName>{title}</ExperienceName>
                {incoming && <IncomingBadge>Incoming</IncomingBadge>}
              </TitleRow>
              <Subtitle>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Subtitle>
              {skills.length > 0 && (
                <TechUsed>
                  {skills.map((skill) => (
                    <SkillTag key={skill}>{skill}</SkillTag>
                  ))}
                </TechUsed>
              )}
            </TextWrapper>
          </Column1>
          <Column2>
            <ImageWrapper>
              <Img src={image} alt={title} />
            </ImageWrapper>
          </Column2>
        </ExperienceGrid>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};

export default ExperienceRow;
