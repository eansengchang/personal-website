import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import ProjectsSection from '../components/ProjectsSection';
import ExperiencesSection from '../components/ExperienceSection';
import Sidebar from '../components/Sidebar';
import CreativeProjectsSection from '../components/CreativeProjectsSection';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../colorScheme';

import { UserContext } from '../contexts/User';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [state, dispatch] = React.useContext(UserContext);

  return (
    <>
      <ThemeProvider theme={state.isDarkTheme ? darkTheme : lightTheme}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection />
        <SkillsSection />
        <ExperiencesSection />
        <ProjectsSection />
        <CreativeProjectsSection/>
        <Footer/>
      </ThemeProvider>
    </>
  );
};

export default Home;
