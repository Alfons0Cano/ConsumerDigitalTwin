import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

const PricingSection = () => {
  return (
    <PricingContainer>
      <SectionTitle>Planes a tu Medida</SectionTitle>
      <PricingSubtitle>Escala tu estrategia con nuestros planes flexibles</PricingSubtitle>
      
      <PlansContainer>
        <PlanCard>
          <PlanName>Básico</PlanName>
          <PlanPrice>€49<span>/mes</span></PlanPrice>
          <PlanDescription>Perfecto para startups y pequeños negocios</PlanDescription>
          <PlanFeatures>
            <PlanFeature>
              <FaCheck /> <span>5 campañas activas</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>Reportes básicos</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>1,000 contactos</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>Email marketing</span>
            </PlanFeature>
          </PlanFeatures>
          <PlanButton>Seleccionar Plan</PlanButton>
        </PlanCard>
        
        <PlanCard featured>
          <FeatureBadge>Más Popular</FeatureBadge>
          <PlanName>Profesional</PlanName>
          <PlanPrice>€99<span>/mes</span></PlanPrice>
          <PlanDescription>Ideal para negocios en crecimiento</PlanDescription>
          <PlanFeatures>
            <PlanFeature>
              <FaCheck /> <span>15 campañas activas</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>Reportes avanzados</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>10,000 contactos</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>Email + SMS marketing</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>Automatizaciones</span>
            </PlanFeature>
          </PlanFeatures>
          <PlanButton featured>Seleccionar Plan</PlanButton>
        </PlanCard>
        
        <PlanCard>
          <PlanName>Empresarial</PlanName>
          <PlanPrice>€249<span>/mes</span></PlanPrice>
          <PlanDescription>Para empresas con necesidades avanzadas</PlanDescription>
          <PlanFeatures>
            <PlanFeature>
              <FaCheck /> <span>Campañas ilimitadas</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>Reportes personalizados</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>Contactos ilimitados</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>Todos los canales</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>API & Integraciones</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>Atención prioritaria</span>
            </PlanFeature>
          </PlanFeatures>
          <PlanButton>Seleccionar Plan</PlanButton>
        </PlanCard>
      </PlansContainer>
      
      <Disclaimer>Todos los planes incluyen prueba gratuita de 14 días. Sin compromiso.</Disclaimer>
    </PricingContainer>
  );
};

// Estilos
const PricingContainer = styled.section`
  padding: 100px 50px;
  background: #f8f9fa;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #2d3748;
`;

const PricingSubtitle = styled.p`
  font-size: 18px;
  color: #4a5568;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`;

const FeatureBadge = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fc8621;
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
`;

const PlanName = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
`;

const PlanPrice = styled.div`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  
  span {
    font-size: 18px;
    font-weight: 400;
  }
`;

const PlanDescription = styled.p`
  margin-bottom: 30px;
  font-size: 16px;
`;

const PlanFeatures = styled.ul`
  text-align: left;
  margin-bottom: 30px;
  list-style: none;
`;

const PlanFeature = styled.li`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  
  svg {
    color: ${props => props.theme.featured ? 'white' : '#77baac'};
    margin-right: 10px;
  }
`;

const PlanCard = styled.div`
  background: ${props => props.featured ? 'linear-gradient(135deg, #77baac 0%, #569187 100%)' : 'white'};
  color: ${props => props.featured ? 'white' : '#2d3748'};
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, ${props => props.featured ? '0.15' : '0.05'});
  position: relative;
  transition: transform 0.3s ease;
  
  ${props => props.featured && `
    transform: scale(1.05);
  `}
  
  &:hover {
    transform: ${props => props.featured ? 'scale(1.08)' : 'scale(1.03)'};
  }
`;

const PlanButton = styled.button`
  background: ${props => props.featured ? 'white' : '#77baac'};
  color: ${props => props.featured ? '#77baac' : 'white'};
  border: none;
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.featured ? '#f8f9fa' : '#669a8f'};
  }
`;

const Disclaimer = styled.p`
  margin-top: 40px;
  color: #718096;
  font-size: 14px;
`;

export default PricingSection;