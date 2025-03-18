import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChartBar, FaEuroSign, FaPercent, FaDownload } from 'react-icons/fa';

const PricingImpact = () => {
  const [price, setPrice] = useState('');
  const [competitors, setCompetitors] = useState('');
  const [margin, setMargin] = useState('');

  const handleSimulate = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de simulación
  };

  const dummyAnalysis = [
    {
      id: 1,
      scenario: 'Optimista',
      impact: 15,
      revenue: 125000,
      confidence: 85
    },
    {
      id: 2,
      scenario: 'Moderado',
      impact: 8,
      revenue: 108000,
      confidence: 92
    },
    {
      id: 3,
      scenario: 'Conservador',
      impact: 3,
      revenue: 103000,
      confidence: 95
    }
  ];

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
              />
            </FormGroup>

            <FormGroup>
              <Label>Precios de Competidores (€)</Label>
              <Input
                type="text"
                value={competitors}
                onChange={(e) => setCompetitors(e.target.value)}
                placeholder="Ej: 89.99, 109.99, 94.99"
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
              />
            </FormGroup>

            <SimulateButton type="submit">
              Simular Impacto
            </SimulateButton>
          </SimulationForm>
        </SimulationSection>

        <ResultsSection>
          <SectionTitle>Resultados del Análisis</SectionTitle>
          
          <ResultsGrid>
            {dummyAnalysis.map(scenario => (
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

          <RecommendationsSection>
            <RecommendationTitle>Recomendaciones</RecommendationTitle>
            <RecommendationList>
              <RecommendationItem>
                <Strong>Precio Óptimo Sugerido:</Strong> €95.99
              </RecommendationItem>
              <RecommendationItem>
                <Strong>Incremento Gradual:</Strong> Implementar cambios de precio en fases de 5%
              </RecommendationItem>
              <RecommendationItem>
                <Strong>Momento Óptimo:</Strong> Iniciar cambios durante temporada alta (Q4)
              </RecommendationItem>
            </RecommendationList>
          </RecommendationsSection>
        </ResultsSection>
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

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const SimulationSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

const ResultsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  color: #2E4756;
  margin-bottom: 1.5rem;
`;

const SimulationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #4A5568;
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

const HelpText = styled.span`
  font-size: 0.8rem;
  color: #718096;
`;

const SimulateButton = styled.button`
  background: #2E4756;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #4A7A8C;
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ResultCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ScenarioHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ScenarioName = styled.h3`
  font-size: 1.2rem;
  color: #2E4756;
  margin: 0;
`;

const Confidence = styled.span`
  background: #EDF2F7;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #4A5568;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Metric = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const MetricIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.positive ? '#C6F6D5' : '#EDF2F7'};
  color: ${props => props.positive ? '#48BB78' : '#4A5568'};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MetricDetails = styled.div``;

const MetricValue = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${props => props.positive ? '#48BB78' : '#2E4756'};
`;

const MetricLabel = styled.div`
  font-size: 0.8rem;
  color: #718096;
`;

const ActionButton = styled.button`
  width: 100%;
  background: none;
  border: 1px solid #CBD5E0;
  padding: 0.75rem;
  border-radius: 5px;
  color: #4A5568;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #EDF2F7;
    border-color: #4A5568;
  }
`;

const RecommendationsSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const RecommendationTitle = styled.h3`
  font-size: 1.2rem;
  color: #2E4756;
  margin-bottom: 1rem;
`;

const RecommendationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RecommendationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
  background: #F7FAFC;
  border-radius: 5px;
`;

const Strong = styled.span`
  font-weight: 600;
  color: #2E4756;
`;

export default PricingImpact;