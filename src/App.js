import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaUsers, FaEnvelope } from 'react-icons/fa';
import './App.css';
import PricingSection from './components/PricingSection';

// Paleta de colores corporativos
const theme = {
  primary: '#2E4756',    // Azul oscuro del logo
  secondary: '#77AABD',  // Azul claro del logo
  accent: '#4A7A8C',     // Tono medio para elementos destacados
  text: '#2D3748',       // Texto principal
  textLight: '#4A5568',  // Texto secundario
  background: '#F7FAFC', // Fondo claro
  white: '#FFFFFF'       // Blanco
};

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar>
          <LogoContainer>
            <LogoImage src="/LogoWithText.png" alt="CONSUMER DIGITAL TWIN AI" />
          </LogoContainer>
          <NavItems>
            <NavItem>Inicio</NavItem>
            <NavItem>Características</NavItem>
            <NavItem>Precios</NavItem>
            <NavItem>Testimonios</NavItem>
            <NavButton>Prueba Gratis</NavButton>
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
                <PrimaryButton>Comenzar Ahora</PrimaryButton>
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

        <FeaturesSection>
          <SectionTitle>Características Principales</SectionTitle>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>
                <FaRocket size={40} />
              </FeatureIcon>
              <FeatureTitle>Campañas Optimizadas</FeatureTitle>
              <FeatureDescription>
                Lanza campañas de marketing con automatización inteligente y optimización en tiempo real.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>
                <FaChartLine size={40} />
              </FeatureIcon>
              <FeatureTitle>Analítica Avanzada</FeatureTitle>
              <FeatureDescription>
                Monitorea el rendimiento de tus campañas con métricas detalladas y reportes personalizables.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>
                <FaUsers size={40} />
              </FeatureIcon>
              <FeatureTitle>Segmentación Precisa</FeatureTitle>
              <FeatureDescription>
                Divide tu audiencia en segmentos específicos para mensajes más relevantes y mayor conversión.
              </FeatureDescription>
            </FeatureCard>
          </FeatureGrid>
        </FeaturesSection>

        {/* Integrando la sección de precios */}
        <PricingSection />

        <CTASection>
          <CTAContent>
            <CTATitle>¿Listo para revolucionar tu estrategia de negocio?</CTATitle>
            <CTADescription>
              Únete a las empresas que ya están utilizando CONSUMER DIGITAL TWIN AI para entender y predecir el comportamiento de sus consumidores.
            </CTADescription>
            <CTAButton>Iniciar Prueba Gratuita</CTAButton>
          </CTAContent>
        </CTASection>

        <TestimonialsSection>
          <SectionTitle>Lo que dicen nuestros clientes</SectionTitle>
          <TestimonialGrid>
            <TestimonialCard>
              <TestimonialText>
                "CONSUMER DIGITAL TWIN AI nos ha permitido predecir con precisión las tendencias de consumo y adaptar nuestra estrategia en tiempo real."
              </TestimonialText>
              <TestimonialAuthor>María González, CDO de TechSolutions</TestimonialAuthor>
            </TestimonialCard>
            <TestimonialCard>
              <TestimonialText>
                "La simulación de comportamiento del consumidor nos ha ayudado a reducir costos y mejorar la satisfacción del cliente significativamente."
              </TestimonialText>
              <TestimonialAuthor>Carlos Ramírez, Director de Innovación Digital</TestimonialAuthor>
            </TestimonialCard>
          </TestimonialGrid>
        </TestimonialsSection>

        <Footer>
          <FooterContent>
            <FooterLogoContainer>
              <FooterLogoImage src="/Logo.png" alt="CONSUMER DIGITAL TWIN AI" />
              <FooterLogoText>CONSUMER DIGITAL TWIN AI</FooterLogoText>
            </FooterLogoContainer>
            <FooterLinks>
              <FooterLink>Sobre Nosotros</FooterLink>
              <FooterLink>Características</FooterLink>
              <FooterLink>Precios</FooterLink>
              <FooterLink>Contacto</FooterLink>
            </FooterLinks>
            <ContactInfo>
              <ContactItem>
                <FaEnvelope /> info@consumerdigitaltwin.ai
              </ContactItem>
            </ContactInfo>
          </FooterContent>
          <Copyright>© 2024 CONSUMER DIGITAL TWIN AI. Todos los derechos reservados.</Copyright>
        </Footer>
      </AppContainer>
    </Router>
  );
}

// Estilos actualizados con la nueva paleta de colores
const AppContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  max-width: 100%;
  overflow-x: hidden;
  background-color: ${theme.background};
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background-color: ${theme.white};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
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
`;

const NavItem = styled.div`
  margin: 0 15px;
  cursor: pointer;
  font-weight: 500;
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
  background: linear-gradient(135deg, ${theme.background} 0%, ${theme.secondary}30 100%);
  
  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  color: ${theme.primary};
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  color: ${theme.textLight};
  line-height: 1.6;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.button`
  background-color: ${theme.primary};
  color: ${theme.white};
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  
  &:hover {
    background-color: ${theme.accent};
  }
`;

const SecondaryButton = styled.button`
  background-color: transparent;
  color: ${theme.primary};
  border: 2px solid ${theme.primary};
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  
  &:hover {
    background-color: ${theme.primary}10;
  }
`;

const HeroImageContainer = styled.div`
  max-width: 400px;
  width: 100%;
  
  img {
    width: 100%;
    height: auto;
  }
  
  @media (max-width: 960px) {
    max-width: 300px;
    margin-top: 40px;
  }
`;

const FeaturesSection = styled.section`
  padding: 100px 50px;
  background-color: ${theme.white};
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 60px;
  color: ${theme.primary};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const FeatureCard = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  color: #77baac;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 15px;
  color: #2d3748;
`;

const FeatureDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%);
  padding: 80px 50px;
  text-align: center;
  color: ${theme.white};
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const CTADescription = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const CTAButton = styled.button`
  background-color: white;
  color: #77baac;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  
  &:hover {
    background-color: #f8f9fa;
  }
`;

const TestimonialsSection = styled.section`
  padding: 100px 50px;
  background-color: ${theme.background};
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const TestimonialCard = styled.div`
  background-color: ${theme.white};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const TestimonialText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: ${theme.textLight};
`;

const TestimonialAuthor = styled.p`
  font-weight: 600;
  color: ${theme.primary};
`;

const Footer = styled.footer`
  background-color: ${theme.primary};
  padding: 60px 50px 20px;
  color: ${theme.white};
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const FooterLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const FooterLogoImage = styled.img`
  height: 40px;
  width: auto;
`;

const FooterLogoText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const FooterLink = styled.a`
  color: ${theme.secondary};
  text-decoration: none;
  
  &:hover {
    color: ${theme.white};
  }
`;

const ContactInfo = styled.div``;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${theme.secondary};
  font-size: 14px;
`;

export default App;
