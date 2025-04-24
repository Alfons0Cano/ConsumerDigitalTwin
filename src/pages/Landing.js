import React from 'react';
import styled from 'styled-components';
import PricingSection from '../components/PricingSection';
import EssenceSection from '../components/EssenceSection';
import VisualIdentitySection from '../components/VisualIdentitySection';
import RoadmapSection from '../components/RoadmapSection';
import FeaturesSection from '../components/FeaturesSection';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const theme = {
  primary: '#2E4756',
  secondary: '#77AABD',
  accent: '#4A7A8C',
  text: '#2D3748',
  textLight: '#4A5568',
  background: '#F7FAFC',
  white: '#FFFFFF'
};

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