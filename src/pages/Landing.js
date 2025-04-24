import React from 'react';
import styled from 'styled-components';
import PricingSection from '../components/landing/PricingSection';
import EssenceSection from '../components/landing/EssenceSection';
import VisualIdentitySection from '../components/landing/VisualIdentitySection';
import RoadmapSection from '../components/landing/RoadmapSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import Navbar from '../components/Navbar';
import HeroSection from '../components/landing/HeroSection';
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