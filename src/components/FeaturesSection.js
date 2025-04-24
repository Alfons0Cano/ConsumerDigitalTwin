import React from 'react';
import styled from 'styled-components';
import { FaRocket, FaChartLine, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <SectionContainer>
      <SectionTitle>Características Principales</SectionTitle>
      <FeatureGrid>
        <FeatureCard>
          <FeatureIcon>
            <FaRocket size={40} />
          </FeatureIcon>
          <FeatureTitle>Simulación de Audiencia</FeatureTitle>
          <FeatureDescription>
            Predice el comportamiento de tus campañas con modelos avanzados de IA y gemelos digitales.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>
            <FaChartLine size={40} />
          </FeatureIcon>
          <FeatureTitle>Optimización de Plataformas</FeatureTitle>
          <FeatureDescription>
            Maximiza el impacto de tus campañas en múltiples canales con análisis inteligente y recomendaciones personalizadas.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>
            <FaUsers size={40} />
          </FeatureIcon>
          <FeatureTitle>Segmentación Avanzada</FeatureTitle>
          <FeatureDescription>
            Crea segmentos precisos de audiencia y personaliza tus mensajes para maximizar la conversión.
          </FeatureDescription>
        </FeatureCard>
      </FeatureGrid>
      <ViewMoreButton onClick={() => navigate('/features')}>
        Ver Todas las Funcionalidades
      </ViewMoreButton>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 80px 50px;
  background-color: #F7FAFC;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: #2E4756;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  color: #77AABD;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #2D3748;
`;

const FeatureDescription = styled.p`
  color: #4A5568;
  line-height: 1.6;
`;

const ViewMoreButton = styled.button`
  display: block;
  margin: 40px auto 0;
  padding: 12px 24px;
  background-color: #2E4756;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #4A7A8C;
  }
`;

export default FeaturesSection; 