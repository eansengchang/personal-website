import React from 'react';

import { GlobalH1 } from '../GlobalElements';

import creativeProjects from './CreativeProjectsList';

import {
  CreativeProjectsContainer,
  CreativeProjectsWrapper,
  CreativeProjectGrid,
} from './CreativeProjectsElements';

import CreativeProject from './CreativeProject';

const CreativeProjectsSection = () => {
  return (
    <CreativeProjectsContainer>
      <GlobalH1>My Creative Projects</GlobalH1>
      <CreativeProjectsWrapper>
        <CreativeProjectGrid>
          {creativeProjects.map((creativeProject) => {
            return (
              <CreativeProject key={creativeProject.text} {...creativeProject} />
            );
          })}
        </CreativeProjectGrid>
      </CreativeProjectsWrapper>
    </CreativeProjectsContainer>
  );
};

export default CreativeProjectsSection;
