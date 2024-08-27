import React from 'react';
import { GlobalH1 } from '../GlobalElements';
import { SkillsContainer, SkillsWrapper, SkillsGrid } from './SkillsElements';
import {
  SiJavascript,
  SiPython,
  SiJava,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiPug,
  SiScala,
  SiTypescript,
  SiDocker,
  SiDotnet,
  SiGit,
  SiHaskell
} from 'react-icons/si';
import Skill from './Skill';


const SkillsSection = () => {
  return (
      <SkillsContainer id="skills">
        <GlobalH1>My Skills</GlobalH1>
        <SkillsWrapper>
          <SkillsGrid>
            <Skill logo={<SiJavascript />} text={'Javascript'} />
            <Skill logo={<SiTypescript />} text={'Typescript'} />
            <Skill logo={<SiHtml5 />} text={'HTML'} />
            <Skill logo={<SiCss3 />} text={'CSS'} />
            <Skill logo={<SiBootstrap />} text={'Bootstrap'} />
            <Skill logo={<SiReact />} text={'React'} />
            <Skill logo={<SiNodedotjs />} text={'NodeJS'} />
            <Skill logo={<SiExpress />} text={'Express'} />
            <Skill logo={<SiPug />} text={'Pug'} />
            <Skill logo={<SiPython />} text={'Python'} />
            <Skill logo={<SiJava />} text={'Java'} />
            <Skill logo={<SiScala />} text={'Scala'} />
            <Skill logo={<SiHaskell />} text={'Haskell'} />
            <Skill logo={<SiMongodb />} text={'MongoDB'} />
            <Skill logo={<SiDocker />} text={'Docker'} />
            <Skill logo={<SiDotnet />} text={'Dotnet'} />
            <Skill logo={<SiGit />} text={'Git'} />
            <Skill logo={<SiGit />} text={'Git'} />
          </SkillsGrid>
        </SkillsWrapper>
      </SkillsContainer>
  );
};

export default SkillsSection;
