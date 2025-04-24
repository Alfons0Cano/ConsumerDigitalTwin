import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { theme } from '../../theme';

const PricingSection = () => {
  return (
    <PricingContainer>
      <SectionTitle>Planes de Digital Twin</SectionTitle>
      <PricingSubtitle>Optimiza tu estrategia digital con IA avanzada</PricingSubtitle>
      
      <PlansContainer>
        <PlanCard>
          <PlanName>Essential</PlanName>
          <PlanPrice>€490<span>/mes</span></PlanPrice>
          <PlanDescription>Ideal para startups</PlanDescription>
          <PlanFeatures>
            <PlanFeature>
              <FaCheck /> <span>20.000 simulaciones/mes</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>Pruebas A/B limitadas</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>Predicciones básicas</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>Soporte vía email</span>
            </PlanFeature>
          </PlanFeatures>
          <PlanButton>Seleccionar Plan</PlanButton>
        </PlanCard>
        
        <PlanCard featured>
          <FeatureBadge>Más Popular</FeatureBadge>
          <PlanName featured>Advanced</PlanName>
          <PlanPrice featured>€990<span>/mes</span></PlanPrice>
          <PlanDescription featured>Para empresas en crecimiento</PlanDescription>
          <PlanFeatures>
            <PlanFeature featured>
              <FaCheck /> <span>150.000 simulaciones/mes</span>
            </PlanFeature>
            <PlanFeature featured>
              <FaCheck /> <span>Predicción de tendencias</span>
            </PlanFeature>
            <PlanFeature featured>
              <FaCheck /> <span>Integración con e-commerce</span>
            </PlanFeature>
            <PlanFeature featured>
              <FaCheck /> <span>Dashboard personalizable</span>
            </PlanFeature>
            <PlanFeature featured>
              <FaCheck /> <span>Soporte prioritario</span>
            </PlanFeature>
          </PlanFeatures>
          <PlanButton featured>Seleccionar Plan</PlanButton>
        </PlanCard>
        
        <PlanCard>
          <PlanName>Enterprise</PlanName>
          <PlanPrice>€2.950<span>/mes</span></PlanPrice>
          <PlanDescription>Para grandes corporaciones</PlanDescription>
          <PlanFeatures>
            <PlanFeature>
              <FaCheck /> <span>Simulaciones ilimitadas</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>Optimización de estrategias</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>NLP avanzado</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>Análisis de riesgos</span>
            </PlanFeature>
            <PlanFeature>
              <FaCheck /> <span>Soporte 24/7</span>
            </PlanFeature>
          </PlanFeatures>
          <PlanButton>Seleccionar Plan</PlanButton>
        </PlanCard>
      </PlansContainer>
      
      <Disclaimer>14 días de prueba gratuita. Sin tarjeta de crédito.</Disclaimer>
    </PricingContainer>
  );
};

// Estilos
const PricingContainer = styled.section`
  padding: 100px 50px;
  background: ${theme.white};
  text-align: center;
`;

const SectionTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 20px;
  color: ${theme.primary};
  font-weight: 700;
`;

const PricingSubtitle = styled.h2`
  font-size: 20px;
  color: ${theme.textLight};
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
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
  background-color: ${theme.accent};
  color: ${theme.white};
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
`;

const PlanName = styled.h3`
  font-size: 28px;
  margin-bottom: 15px;
  font-weight: 600;
  color: ${props => props.featured ? theme.white : theme.primary};
`;

const PlanPrice = styled.div`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${props => props.featured ? theme.white : theme.primary};
  
  span {
    font-size: 18px;
    font-weight: 400;
  }
`;

const PlanDescription = styled.h4`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.featured ? theme.white : theme.textLight};
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
  color: ${props => props.featured ? theme.white : theme.textLight};
  
  svg {
    color: ${props => props.featured ? theme.white : theme.primary};
    margin-right: 10px;
  }
`;

const PlanCard = styled.div`
  background: ${props => props.featured ? `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)` : theme.white};
  color: ${props => props.featured ? theme.white : theme.text};
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
  background: ${props => props.featured ? theme.white : theme.primary};
  color: ${props => props.featured ? theme.primary : theme.white};
  border: none;
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.featured ? theme.background : theme.accent};
  }
`;

const Disclaimer = styled.p`
  margin-top: 40px;
  color: ${theme.textLight};
  font-size: 14px;
`;

export default PricingSection;