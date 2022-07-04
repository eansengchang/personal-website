import React from 'react';
import ProjectRow from './ProjectRow';
import { ProjectsContainer } from './ProjectElements';
import { GlobalH1 } from '../GlobalElements';
import projects from './ProjectList';

const ProjectsSection = () => {
  return (
    <>
      <ProjectsContainer id="projects">
        <GlobalH1>Projects</GlobalH1>
        {projects.map((project) => {
            return (
              <ProjectRow key={project.title} {...project} />
            );
          })}
      </ProjectsContainer>
    </>
  );
};

export default ProjectsSection;
