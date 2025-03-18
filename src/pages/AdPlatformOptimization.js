import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBullhorn, FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaLinkedin, FaFilter } from 'react-icons/fa';

const AdPlatformOptimization = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [dateRange, setDateRange] = useState('30d');
  const [budget, setBudget] = useState('');

  const platforms = [
    { id: 'facebook', name: 'Facebook', icon: FaFacebook, color: '#1877F2' },
    { id: 'google', name: 'Google Ads', icon: FaGoogle, color: '#4285F4' },
    { id: 'instagram', name: 'Instagram', icon: FaInstagram, color: '#E4405F' },
    { id: 'twitter', name: 'Twitter', icon: FaTwitter, color: '#1DA1F2' },
    { id: 'linkedin', name: 'LinkedIn', icon: FaLinkedin, color: '#0A66C2' }
  ];

  const metrics = [
    { id: 1, platform: 'facebook', ctr: 2.8, cpc: 0.45, conversion: 3.2, roi: 225 },
    { id: 2, platform: 'google', ctr: 3.5, cpc: 0.65, conversion: 4.1, roi: 285 },
    { id: 3, platform: 'instagram', ctr: 3.2, cpc: 0.55, conversion: 3.8, roi: 245 },
    { id: 4, platform: 'twitter', ctr: 2.1, cpc: 0.35, conversion: 2.5, roi: 180 },
    { id: 5, platform: 'linkedin', ctr: 2.4, cpc: 0.75, conversion: 3.0, roi: 195 }
  ];

  const recommendations = [
    {
      platform: 'google',
      title: 'Optimizar Palabras Clave',
      description: 'Identificadas 15 nuevas palabras clave con alto potencial y bajo CPC'
    },
    {
      platform: 'facebook',
      title: 'Ajustar Segmentación',
      description: 'Refinar segmentación por edad y comportamiento para mejorar CTR'
    },
    {
      platform: 'instagram',
      title: 'Contenido Visual',
      description: 'Aumentar uso de Reels para mejorar engagement y reducir costos'
    }
  ];

  return (
    <PageContainer>
      <Header>
        <Title>
          <FaBullhorn />
          <span>Optimización de Plataformas Publicitarias</span>
        </Title>
        <Description>
          Optimiza el rendimiento de tus campañas publicitarias en múltiples plataformas
        </Description>
      </Header>

      <Controls>
        <ControlGroup>
          <Label>Plataforma</Label>
          <Select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="all">Todas las Plataformas</option>
            {platforms.map(platform => (
              <option key={platform.id} value={platform.id}>
                {platform.name}
              </option>
            ))}
          </Select>
        </ControlGroup>

        <ControlGroup>
          <Label>Período</Label>
          <Select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="7d">Últimos 7 días</option>
            <option value="30d">Últimos 30 días</option>
            <option value="90d">Últimos 90 días</option>
          </Select>
        </ControlGroup>

        <ControlGroup>
          <Label>Presupuesto Mensual (€)</Label>
          <Input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Ej: 5000"
          />
        </ControlGroup>
      </Controls>

      <Content>
        <MainSection>
          <SectionTitle>Rendimiento por Plataforma</SectionTitle>
          <MetricsGrid>
            {metrics.map(metric => (
              <MetricCard key={metric.id}>
                <PlatformHeader>
                  {React.createElement(
                    platforms.find(p => p.id === metric.platform).icon,
                    { 
                      size: 24,
                      color: platforms.find(p => p.id === metric.platform).color 
                    }
                  )}
                  <PlatformName>
                    {platforms.find(p => p.id === metric.platform).name}
                  </PlatformName>
                </PlatformHeader>

                <MetricsContainer>
                  <MetricItem>
                    <MetricLabel>CTR</MetricLabel>
                    <MetricValue>{metric.ctr}%</MetricValue>
                  </MetricItem>

                  <MetricItem>
                    <MetricLabel>CPC Medio</MetricLabel>
                    <MetricValue>€{metric.cpc}</MetricValue>
                  </MetricItem>

                  <MetricItem>
                    <MetricLabel>Conversión</MetricLabel>
                    <MetricValue>{metric.conversion}%</MetricValue>
                  </MetricItem>

                  <MetricItem>
                    <MetricLabel>ROI</MetricLabel>
                    <MetricValue positive>{metric.roi}%</MetricValue>
                  </MetricItem>
                </MetricsContainer>
              </MetricCard>
            ))}
          </MetricsGrid>
        </MainSection>

        <SideSection>
          <SectionTitle>
            <FaFilter />
            Recomendaciones de Optimización
          </SectionTitle>

          <RecommendationsList>
            {recommendations.map((rec, index) => (
              <RecommendationCard key={index}>
                <RecommendationHeader>
                  {React.createElement(
                    platforms.find(p => p.id === rec.platform).icon,
                    { 
                      size: 20,
                      color: platforms.find(p => p.id === rec.platform).color 
                    }
                  )}
                  <RecommendationTitle>{rec.title}</RecommendationTitle>
                </RecommendationHeader>
                <RecommendationDescription>
                  {rec.description}
                </RecommendationDescription>
                <ActionButton>
                  Aplicar Recomendación
                </ActionButton>
              </RecommendationCard>
            ))}
          </RecommendationsList>
        </SideSection>
      </Content>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2E4756;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #666;
  font-size: 1.1rem;
`;

const Controls = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 200px;
`;

const Label = styled.label`
  font-weight: 500;
  color: #4A5568;
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #CBD5E0;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #77AABD;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #CBD5E0;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #77AABD;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SideSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  color: #2E4756;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const MetricsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const MetricCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PlatformHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const PlatformName = styled.h3`
  font-size: 1.2rem;
  color: #2E4756;
  margin: 0;
`;

const MetricsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

const MetricItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MetricLabel = styled.div`
  font-size: 0.9rem;
  color: #718096;
`;

const MetricValue = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${props => props.positive ? '#48BB78' : '#2E4756'};
`;

const RecommendationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RecommendationCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const RecommendationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const RecommendationTitle = styled.h4`
  font-size: 1.1rem;
  color: #2E4756;
  margin: 0;
`;

const RecommendationDescription = styled.p`
  color: #4A5568;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const ActionButton = styled.button`
  width: 100%;
  background: #2E4756;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #4A7A8C;
  }
`;

export default AdPlatformOptimization;