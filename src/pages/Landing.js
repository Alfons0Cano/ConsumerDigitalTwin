import React from 'react';
import styled from 'styled-components';
import PricingSection from '../components/PricingSection';
import EssenceSection from '../components/EssenceSection';
import VisualIdentitySection from '../components/VisualIdentitySection';
import RoadmapSection from '../components/RoadmapSection';
import FeaturesSection from '../components/FeaturesSection';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import { theme } from '../theme';

const Landing = () => {
  return (
    <LandingContainer>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <EssenceSection />
      <VisualIdentitySection />
      <RoadmapSection />
      <PricingSection />
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: ${theme.background};
  padding-top: 70px;
`;

export default Landing;