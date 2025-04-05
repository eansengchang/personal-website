import React from 'react';
import ExperienceRow from './ExperienceRow';
import { ExperiencesContainer } from './ExperienceElements';
import { GlobalH1 } from '../GlobalElements';
import experiences from './ExperienceList';

const ExperiencesSection = () => {
  return (
    <>
      <ExperiencesContainer id="experience">
        <GlobalH1>Experience</GlobalH1>
        {experiences.map((experience) => {
            return (
              <ExperienceRow key={experience.title} {...experience} />
            );
          })}
      </ExperiencesContainer>
    </>
  );
};

export default ExperiencesSection;
