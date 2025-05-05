import React from 'react';
import styled from 'styled-components';
import PricingSection from '../components/landing/PricingSection';
import EssenceSection from '../components/landing/EssenceSection';
import VisualIdentitySection from '../components/landing/VisualIdentitySection';
import RoadmapSection from '../components/landing/RoadmapSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import CompetitionSection from '../components/landing/CompetitionSection';
import Navbar from '../components/Navbar';
import HeroSection from '../components/landing/HeroSection';
import VideoSection from '../components/landing/VideoSection';
import ContactSection from '../components/landing/ContactSection';
import { theme } from '../theme';

const Landing = () => {
  return (
    <LandingContainer>
      <Navbar />
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <EssenceSection />
      <CompetitionSection />
      <VisualIdentitySection />
      <RoadmapSection />
      <PricingSection />
      <ContactSection />
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: ${theme.background};
  padding-top: 70px;
  width: 100%;
  overflow-x: hidden;
`;

export default Landing;