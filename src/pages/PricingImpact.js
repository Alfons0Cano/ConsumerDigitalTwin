import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChartBar, FaEuroSign, FaPercent, FaDownload, FaInfoCircle } from 'react-icons/fa';
import { getPricingImpactData } from '../services/demoData';

const PricingImpact = () => {
  const [price, setPrice] = useState('');
  const [competitors, setCompetitors] = useState('');
  const [margin, setMargin] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSimulate = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const results = getPricingImpactData(price, competitors, margin);
      setAnalysis(results);
      setLoading(false);
    }, 1500);
  };

  return (
    <PageContainer>
      <Header>
        <Title>
          <FaChartBar />
          <span>Modelado de Impacto de Precios</span>
        </Title>
        <Description>
          Simula y analiza el impacto de cambios de precios en tus productos o servicios
        </Description>
      </Header>

      <Content>
        <SimulationSection>
          <SectionTitle>Configuración de Simulación</SectionTitle>
          
          <SimulationForm onSubmit={handleSimulate}>
            <FormGroup>
              <Label>Precio Actual (€)</Label>
              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Ej: 99.99"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Precios de Competidores (€)</Label>
              <Input
                type="text"
                value={competitors}
                onChange={(e) => setCompetitors(e.target.value)}
                placeholder="Ej: 89.99, 109.99, 94.99"
                required
              />
              <HelpText>Separa los precios con comas</HelpText>
            </FormGroup>

            <FormGroup>
              <Label>Margen de Beneficio (%)</Label>
              <Input
                type="number"
                value={margin}
                onChange={(e) => setMargin(e.target.value)}
                placeholder="Ej: 30"
                required
              />
            </FormGroup>

            <SimulateButton type="submit" disabled={loading}>
              {loading ? 'Simulando...' : 'Simular Impacto'}
            </SimulateButton>
          </SimulationForm>
        </SimulationSection>

        <ResultsSection>
          <SectionTitle>Resultados del Análisis</SectionTitle>
          
          {loading ? (
            <LoadingMessage>Analizando impacto de precios...</LoadingMessage>
          ) : analysis ? (
            <>
              <ResultsGrid>
                {analysis.scenarios.map(scenario => (
                  <ResultCard key={scenario.id}>
                    <ScenarioHeader>
                      <ScenarioName>{scenario.scenario}</ScenarioName>
                      <Confidence>{scenario.confidence}% confianza</Confidence>
                    </ScenarioHeader>

                    <MetricsGrid>
                      <Metric>
                        <MetricIcon positive={scenario.impact > 0}>
                          <FaPercent />
                        </MetricIcon>
                        <MetricDetails>
                          <MetricValue positive={scenario.impact > 0}>
                            {scenario.impact > 0 ? '+' : ''}{scenario.impact}%
                          </MetricValue>
                          <MetricLabel>Impacto en Ventas</MetricLabel>
                        </MetricDetails>
                      </Metric>

                      <Metric>
                        <MetricIcon>
                          <FaEuroSign />
                        </MetricIcon>
                        <MetricDetails>
                          <MetricValue>€{scenario.revenue.toLocaleString()}</MetricValue>
                          <MetricLabel>Ingresos Proyectados</MetricLabel>
                        </MetricDetails>
                      </Metric>
                    </MetricsGrid>

                    <ActionButton>
                      <FaDownload /> Exportar Detalles
                    </ActionButton>
                  </ResultCard>
                ))}
              </ResultsGrid>

              <MarketAnalysisSection>
                <SectionTitle>Análisis de Mercado</SectionTitle>
                <MarketInfo>
                  <InfoItem>
                    <InfoLabel>Posición de Precio</InfoLabel>
                    <InfoValue>
                      {analysis.marketAnalysis.pricePosition === 'below' ? 'Por debajo' : 'Por encima'} del promedio
                    </InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Diferencia con Competidores</InfoLabel>
                    <InfoValue>{analysis.marketAnalysis.priceDifference}%</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Análisis de Margen</InfoLabel>
                    <InfoValue>{analysis.marketAnalysis.marginAnalysis}</InfoValue>
                  </InfoItem>
                </MarketInfo>
              </MarketAnalysisSection>

              <RecommendationsSection>
                <RecommendationTitle>Recomendaciones</RecommendationTitle>
                <RecommendationList>
                  {analysis.recommendations.map((rec, index) => (
                    <RecommendationItem key={index}>
                      <RecommendationHeader>
                        <Strong>{rec.title}:</Strong>
                        <RecommendationValue>{rec.value}</RecommendationValue>
                      </RecommendationHeader>
                      <RecommendationDescription>{rec.description}</RecommendationDescription>
                    </RecommendationItem>
                  ))}
                </RecommendationList>
              </RecommendationsSection>
            </>
          ) : (
            <EmptyState>
              <EmptyStateIcon><FaInfoCircle /></EmptyStateIcon>
              <EmptyStateText>
                Configura los parámetros y ejecuta la simulación para ver los resultados
              </EmptyStateText>
            </EmptyState>
          )}
        </ResultsSection>
      </Content>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 0.75rem;
  max-width: 1200px;
  margin: 0 auto;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: 0.75rem;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  color: #2E4756;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`;

const Description = styled.p`
  color: #666;
  font-size: 0.85rem;
  margin: 0;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.75rem;
  flex: 1;
  min-height: 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const SimulationSection = styled.div`
  background: white;
  padding: 0.75rem;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

const ResultsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #CBD5E0;
    border-radius: 2px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 0.9rem;
  color: #2E4756;
  margin-bottom: 0.75rem;
`;

const SimulationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #4A5568;
  font-size: 0.75rem;
`;

const Input = styled.input`
  padding: 0.4rem;
  border: 1px solid #CBD5E0;
  border-radius: 4px;
  font-size: 0.85rem;
  height: 32px;
  
  &:focus {
    outline: none;
    border-color: #77AABD;
  }
`;

const HelpText = styled.span`
  font-size: 0.7rem;
  color: #718096;
`;

const SimulateButton = styled.button`
  background: #2E4756;
  color: white;
  border: none;
  padding: 0.6rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background-color 0.2s;
  height: 32px;
  
  &:hover {
    background: #4A7A8C;
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

const ResultCard = styled.div`
  background: white;
  padding: 0.75rem;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ScenarioHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ScenarioName = styled.h3`
  font-size: 0.9rem;
  color: #2E4756;
  margin: 0;
`;

const Confidence = styled.span`
  background: #EDF2F7;
  padding: 0.15rem 0.4rem;
  border-radius: 10px;
  font-size: 0.65rem;
  color: #4A5568;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Metric = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const MetricIcon = styled.div`
  width: 28px;
  height: 28px;
  background: ${props => props.positive ? '#C6F6D5' : '#EDF2F7'};
  color: ${props => props.positive ? '#48BB78' : '#4A5568'};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;

const MetricDetails = styled.div``;

const MetricValue = styled.div`
  font-weight: 600;
  font-size: 0.85rem;
  color: ${props => props.positive ? '#48BB78' : '#2E4756'};
`;

const MetricLabel = styled.div`
  font-size: 0.7rem;
  color: #718096;
`;

const ActionButton = styled.button`
  width: 100%;
  background: none;
  border: 1px solid #CBD5E0;
  padding: 0.4rem;
  border-radius: 4px;
  color: #4A5568;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.75rem;
  
  &:hover {
    background: #EDF2F7;
    border-color: #4A5568;
  }
`;

const RecommendationsSection = styled.div`
  background: white;
  padding: 0.75rem;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const RecommendationTitle = styled.h3`
  font-size: 0.9rem;
  color: #2E4756;
  margin-bottom: 0.5rem;
`;

const RecommendationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RecommendationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.6rem;
  background: #F7FAFC;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const Strong = styled.span`
  font-weight: 600;
  color: #2E4756;
`;

const MarketAnalysisSection = styled.div`
  background: white;
  padding: 0.75rem;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.75rem;
`;

const MarketInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

const InfoItem = styled.div`
  padding: 0.6rem;
  background: #F7FAFC;
  border-radius: 4px;
`;

const InfoLabel = styled.div`
  font-size: 0.7rem;
  color: #718096;
  margin-bottom: 0.2rem;
`;

const InfoValue = styled.div`
  font-size: 0.85rem;
  color: #2E4756;
  font-weight: 500;
`;

const RecommendationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
`;

const RecommendationValue = styled.span`
  color: #48BB78;
  font-weight: 600;
`;

const RecommendationDescription = styled.p`
  color: #718096;
  font-size: 0.75rem;
  margin: 0;
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #666;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  background: #F7FAFC;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
`;

const EmptyStateIcon = styled.div`
  font-size: 3rem;
  color: #CBD5E0;
  margin-bottom: 1rem;
`;

const EmptyStateText = styled.p`
  color: #4A5568;
  font-size: 1.1rem;
  max-width: 400px;
`;

export default PricingImpact;