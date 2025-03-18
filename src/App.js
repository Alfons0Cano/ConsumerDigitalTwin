import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaUsers, FaEnvelope } from 'react-icons/fa';
import './App.css';
import PricingSection from './components/PricingSection';

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar>
          <Logo>MarketBoost</Logo>
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
              <HeroTitle>Potencia tu Estrategia de Marketing</HeroTitle>
              <HeroSubtitle>
                Alcanza a tu audiencia ideal, convierte visitantes en clientes y maximiza tu ROI con nuestra plataforma integral de marketing.
              </HeroSubtitle>
              <HeroButtons>
                <PrimaryButton>Comenzar Ahora</PrimaryButton>
                <SecondaryButton>Ver Demo</SecondaryButton>
              </HeroButtons>
            </motion.div>
          </HeroContent>
          <HeroImage src="https://via.placeholder.com/600x400" alt="Marketing Dashboard" />
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
            <CTATitle>¿Listo para impulsar tus resultados?</CTATitle>
            <CTADescription>
              Únete a más de 10,000 empresas que ya están creciendo con MarketBoost.
            </CTADescription>
            <CTAButton>Iniciar Prueba Gratuita</CTAButton>
          </CTAContent>
        </CTASection>

        <TestimonialsSection>
          <SectionTitle>Lo que dicen nuestros clientes</SectionTitle>
          <TestimonialGrid>
            <TestimonialCard>
              <TestimonialText>
                "MarketBoost transformó completamente nuestra estrategia digital. Incrementamos nuestras conversiones en un 40% en solo tres meses."
              </TestimonialText>
              <TestimonialAuthor>María González, CMO de TechSolutions</TestimonialAuthor>
            </TestimonialCard>
            <TestimonialCard>
              <TestimonialText>
                "La facilidad de uso y los resultados que obtenemos son incomparables. La mejor inversión que hemos hecho para nuestro departamento de marketing."
              </TestimonialText>
              <TestimonialAuthor>Carlos Ramírez, Director de Marketing Digital</TestimonialAuthor>
            </TestimonialCard>
          </TestimonialGrid>
        </TestimonialsSection>

        <Footer>
          <FooterContent>
            <FooterLogo>MarketBoost</FooterLogo>
            <FooterLinks>
              <FooterLink>Sobre Nosotros</FooterLink>
              <FooterLink>Características</FooterLink>
              <FooterLink>Precios</FooterLink>
              <FooterLink>Contacto</FooterLink>
            </FooterLinks>
            <ContactInfo>
              <ContactItem>
                <FaEnvelope /> info@marketboost.com
              </ContactItem>
            </ContactInfo>
          </FooterContent>
          <Copyright>© 2023 MarketBoost. Todos los derechos reservados.</Copyright>
        </Footer>
      </AppContainer>
    </Router>
  );
}

// Estilos con Styled Components
const AppContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  max-width: 100%;
  overflow-x: hidden;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #77baac;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  margin: 0 15px;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    color: #77baac;
  }
`;

const NavButton = styled.button`
  background-color: #77baac;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  
  &:hover {
    background-color: #669a8f;
  }
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 50px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  
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
  color: #2d3748;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  color: #4a5568;
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
  background-color: #77baac;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  
  &:hover {
    background-color: #669a8f;
  }
`;

const SecondaryButton = styled.button`
  background-color: transparent;
  color: #77baac;
  border: 2px solid #77baac;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  
  &:hover {
    background-color: rgba(119, 186, 172, 0.1);
  }
`;

const HeroImage = styled.img`
  max-width: 50%;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 960px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const FeaturesSection = styled.section`
  padding: 100px 50px;
  background-color: #ffffff;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 60px;
  color: #2d3748;
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
  background: linear-gradient(135deg, #77baac 0%, #569187 100%);
  padding: 80px 50px;
  text-align: center;
  color: white;
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
  background-color: #f8f9fa;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const TestimonialCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const TestimonialText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #4a5568;
`;

const TestimonialAuthor = styled.p`
  font-weight: 600;
  color: #2d3748;
`;

const Footer = styled.footer`
  background-color: #2d3748;
  padding: 60px 50px 20px;
  color: white;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const FooterLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const FooterLink = styled.a`
  color: #cbd5e0;
  text-decoration: none;
  
  &:hover {
    color: white;
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
  color: #cbd5e0;
  font-size: 14px;
`;

export default App;
