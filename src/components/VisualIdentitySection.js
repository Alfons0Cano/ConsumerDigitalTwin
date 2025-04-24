import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';

const VisualIdentitySection = () => {
  return (
    <Section>
      <SectionTitle>Nuestra Identidad Visual</SectionTitle>
      <ContentContainer>
        <LogoContainer>
          <motion.img 
            src="/Logo.png"
            alt="CONSUMER DIGITAL TWIN AI Logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </LogoContainer>
        <IdentityContent>
          <IdentityTitle>Logo</IdentityTitle>
          <IdentityDescription>
            Nuestro logo representa la fusión perfecta entre tecnología y simulación digital. 
            El diseño minimalista y moderno refleja nuestra apuesta por la innovación y la precisión, 
            mientras que los elementos geométricos simbolizan la estructura y el análisis de datos 
            que fundamentan nuestra plataforma.
          </IdentityDescription>
          
          <IdentityTitle>Lema</IdentityTitle>
          <Motto>"De las simulaciones digitales, a los logros reales"</Motto>
          <IdentityDescription>
            Este lema refleja nuestra capacidad de transformar las pruebas digitales en resultados 
            tangibles y medibles para las empresas, demostrando el valor real de nuestra tecnología 
            en el mundo empresarial.
          </IdentityDescription>
        </IdentityContent>
      </ContentContainer>
    </Section>
  );
};

const Section = styled.section`
  padding: 80px 50px;
  background-color: ${theme.background};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: ${theme.primary};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;
`;

const LogoContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

const IdentityContent = styled.div`
  text-align: center;
  max-width: 800px;
`;

const IdentityTitle = styled.h3`
  font-size: 1.8rem;
  color: ${theme.primary};
  margin-bottom: 20px;
  margin-top: 40px;
`;

const IdentityDescription = styled.p`
  color: ${theme.textLight};
  line-height: 1.6;
  font-size: 1.1rem;
  margin-bottom: 30px;
`;

const Motto = styled.h2`
  color: ${theme.primary};
  font-size: 1.6rem;
  font-weight: 600;
  margin: 20px 0;
  padding: 20px;
  background-color: ${theme.white};
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export default VisualIdentitySection; 