import React from 'react';
import { SkillName, SkillLogo, SkillBox } from './SkillsElements';

const Skill = ({logo, text}) => {
  return (
    <SkillBox>
      <SkillLogo>
       {logo}
      </SkillLogo>
      <SkillName>{text}</SkillName>
    </SkillBox>
  );
};

export default Skill;
