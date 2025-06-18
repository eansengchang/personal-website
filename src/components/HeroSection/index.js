import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ProfileImg,
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = (hover) => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <ProfileImg src={require('../../images/profile 2.jpeg')} alt="My Profile" />
        <HeroH1>Ean Seng Chang</HeroH1>
        <HeroP>Mathematics and Computer Science Student</HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            offset={-80}
            duration={300}
          >
            About me
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
