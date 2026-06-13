import React from 'react';
import { Button } from '../ButtonElements';
import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroSubtitle,
  HeroBtnWrapper,
  ProfileImg,
} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <ProfileImg
          src={require('../../images/profile 2.jpeg')}
          alt="Ean Seng Chang"
        />
        <HeroH1>Ean Seng Chang</HeroH1>
        <HeroP>Incoming Software Engineer at Coinbase</HeroP>
        <HeroSubtitle>Mathematics &amp; Computer Science @ Oxford</HeroSubtitle>
        <HeroBtnWrapper>
          <Button
            to="about"
            $primary
            $dark
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
