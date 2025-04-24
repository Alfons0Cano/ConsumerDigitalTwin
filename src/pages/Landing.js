import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PricingSection from '../components/PricingSection';
import EssenceSection from '../components/EssenceSection';
import VisualIdentitySection from '../components/VisualIdentitySection';
import RoadmapSection from '../components/RoadmapSection';
import FeaturesSection from '../components/FeaturesSection';

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
  const navigate = useNavigate();

  return (
    <LandingContainer>
      <Navbar>
        <LogoContainer>
          <LogoImage src="/LogoWithText.png" alt="CONSUMER DIGITAL TWIN AI" />
        </LogoContainer>
        <NavItems>
          <NavItem onClick={() => navigate('/login')}>Iniciar Sesión</NavItem>
          <NavButton onClick={() => navigate('/login')}>Prueba Gratis</NavButton>
        </NavItems>
      </Navbar>

      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>Simula el Comportamiento del Consumidor con IA</HeroTitle>
            <HeroSubtitle>
              Predice, analiza y optimiza las decisiones de tus consumidores utilizando tecnología de gemelos digitales e inteligencia artificial.
            </HeroSubtitle>
            <HeroButtons>
              <PrimaryButton onClick={() => navigate('/login')}>Comenzar Ahora</PrimaryButton>
              <SecondaryButton>Ver Demo</SecondaryButton>
            </HeroButtons>
          </motion.div>
        </HeroContent>
        <HeroImageContainer>
          <motion.img 
            src="/Logo.png"
            alt="CONSUMER DIGITAL TWIN AI"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </HeroImageContainer>
      </HeroSection>

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
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background-color: ${theme.white};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  height: 40px;
`;

const LogoImage = styled.img`
  height: 100%;
  width: auto;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavItem = styled.div`
  cursor: pointer;
  color: ${theme.text};
  &:hover {
    color: ${theme.primary};
  }
`;

const NavButton = styled.button`
  background-color: ${theme.primary};
  color: ${theme.white};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  
  &:hover {
    background-color: ${theme.accent};
  }
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 50px;
  background-color: ${theme.white};
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  color: ${theme.primary};
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.textLight};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const PrimaryButton = styled(Button)`
  background-color: ${theme.primary};
  color: ${theme.white};
  border: none;
  
  &:hover {
    background-color: ${theme.accent};
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${theme.primary};
  border: 2px solid ${theme.primary};
  
  &:hover {
    background-color: ${theme.primary};
    color: ${theme.white};
  }
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default Landing;