import React from 'react';
import { GlobalH1 } from '../GlobalElements';
import { SkillsContainer, SkillsWrapper, SkillsGrid } from './SkillsElements';
import {
  SiJavascript,
  SiPython,
  SiJava,
  SiCplusplus,
  SiGo,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiPug,
  SiScala,
  SiTypescript,
  SiDocker,
  SiDotnet,
  SiGit,
  SiHaskell,
  SiAmazonaws,
  SiLinux,
  SiPostman,
  SiLatex,
  SiPandas,
  SiNumpy,
  SiKeras,
  SiPytest
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
            <Skill logo={<SiPython />} text={'Python'} />
            <Skill logo={<SiJava />} text={'Java'} />
            <Skill logo={<SiCplusplus />} text={'C++'} />
            <Skill logo={<SiGo />} text={'Go'} />
            <Skill logo={<SiScala />} text={'Scala'} />
            <Skill logo={<SiHaskell />} text={'Haskell'} />
            <Skill logo={<SiHtml5 />} text={'HTML'} />
            <Skill logo={<SiCss3 />} text={'CSS'} />
            <Skill logo={<SiReact />} text={'React'} />
            <Skill logo={<SiNodedotjs />} text={'NodeJS'} />
            <Skill logo={<SiExpress />} text={'Express'} />
            <Skill logo={<SiBootstrap />} text={'Bootstrap'} />
            <Skill logo={<SiPug />} text={'Pug'} />
            <Skill logo={<SiDotnet />} text={'Dotnet'} />
            <Skill logo={<SiMongodb />} text={'MongoDB'} />
            <Skill logo={<SiPostgresql />} text={'PostgreSQL'} />
            <Skill logo={<SiGit />} text={'Git'} />
            <Skill logo={<SiDocker />} text={'Docker'} />
            <Skill logo={<SiAmazonaws />} text={'AWS'} />
            <Skill logo={<SiLinux />} text={'Linux'} />
            <Skill logo={<SiPostman />} text={'Postman'} />
            <Skill logo={<SiLatex />} text={'LaTeX'} />
            <Skill logo={<SiPandas />} text={'Pandas'} />
            <Skill logo={<SiNumpy />} text={'NumPy'} />
            <Skill logo={<SiKeras />} text={'Keras'} />
            <Skill logo={<SiPytest />} text={'Pytest'} />
          </SkillsGrid>
        </SkillsWrapper>
      </SkillsContainer>
  );
};

export default SkillsSection;
