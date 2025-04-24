import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { theme } from '../theme';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <HeroContainer>
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
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
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

export default HeroSection; 