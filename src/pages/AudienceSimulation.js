import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUsers, FaChartBar, FaCog } from 'react-icons/fa';
import { getAudienceSimulationData } from '../services/demoData';
import LineChart from '../components/charts/LineChart';

const AudienceSimulation = () => {
  const [selectedScenario, setSelectedScenario] = useState('default');
  const [audienceSize, setAudienceSize] = useState(1000);
  const [demographics, setDemographics] = useState({
    age: '18-35',
    gender: 'all',
    location: 'españa'
  });
  const [simulationResults, setSimulationResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSimulation = async () => {
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      const results = getAudienceSimulationData(audienceSize);
      setSimulationResults(results);
    } catch (error) {
      console.error('Error running simulation:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <Header>
        <Title>
          <FaUsers />
          <span>Simulación de Audiencia</span>
        </Title>
        <Description>
          Simula el comportamiento de tu audiencia objetivo utilizando modelos avanzados de IA
        </Description>
      </Header>

      <Content>
        <ConfigSection>
          <SectionTitle>Configuración de la Simulación</SectionTitle>
          
          <ConfigForm>
            <FormGroup>
              <Label>Escenario</Label>
              <Select 
                value={selectedScenario}
                onChange={(e) => setSelectedScenario(e.target.value)}
              >
                <option value="default">Comportamiento Estándar</option>
                <option value="seasonal">Temporada Alta</option>
                <option value="crisis">Situación de Crisis</option>
                <option value="launch">Lanzamiento de Producto</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Tamaño de la Audiencia</Label>
              <Input
                type="number"
                value={audienceSize}
                onChange={(e) => setAudienceSize(Number(e.target.value))}
                min="100"
                max="1000000"
              />
            </FormGroup>

            <FormGroup>
              <Label>Rango de Edad</Label>
              <Select
                value={demographics.age}
                onChange={(e) => setDemographics({...demographics, age: e.target.value})}
              >
                <option value="18-35">18-35 años</option>
                <option value="36-50">36-50 años</option>
                <option value="51+">51+ años</option>
                <option value="all">Todas las edades</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Género</Label>
              <Select
                value={demographics.gender}
                onChange={(e) => setDemographics({...demographics, gender: e.target.value})}
              >
                <option value="all">Todos</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Ubicación</Label>
              <Select
                value={demographics.location}
                onChange={(e) => setDemographics({...demographics, location: e.target.value})}
              >
                <option value="españa">España</option>
                <option value="latam">Latinoamérica</option>
                <option value="usa">Estados Unidos</option>
                <option value="europe">Europa</option>
              </Select>
            </FormGroup>

            <SimulateButton onClick={handleSimulation} disabled={loading}>
              <FaCog className={loading ? 'spinning' : ''} />
              {loading ? 'Simulando...' : 'Iniciar Simulación'}
            </SimulateButton>
          </ConfigForm>
        </ConfigSection>

        <ResultsSection>
          <SectionTitle>Resultados de la Simulación</SectionTitle>
          
          {loading ? (
            <LoadingMessage>Ejecutando simulación...</LoadingMessage>
          ) : simulationResults ? (
            <>
              <ResultsGrid>
                <ResultCard>
                  <ResultIcon><FaUsers /></ResultIcon>
                  <ResultTitle>Audiencia Alcanzada</ResultTitle>
                  <ResultValue>{simulationResults.reached.toLocaleString()}</ResultValue>
                  <ResultDelta positive>+12.5%</ResultDelta>
                </ResultCard>

                <ResultCard>
                  <ResultIcon><FaChartBar /></ResultIcon>
                  <ResultTitle>Tasa de Conversión</ResultTitle>
                  <ResultValue>{simulationResults.conversion}%</ResultValue>
                  <ResultDelta positive>+0.5%</ResultDelta>
                </ResultCard>

                <ResultCard>
                  <ResultIcon><FaUsers /></ResultIcon>
                  <ResultTitle>Retención</ResultTitle>
                  <ResultValue>{simulationResults.retention}%</ResultValue>
                  <ResultDelta>-2.1%</ResultDelta>
                </ResultCard>
              </ResultsGrid>

              <ChartContainer>
                <ChartTitle>Comportamiento de la Audiencia en el Tiempo</ChartTitle>
                <LineChart data={simulationResults.behavior} color="#77AABD" />
              </ChartContainer>
            </>
          ) : (
            <EmptyState>
              <EmptyStateIcon><FaCog /></EmptyStateIcon>
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

const ConfigSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: #2E4756;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const ConfigForm = styled.div`
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

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #CBD5E0;
  border-radius: 5px;
  font-size: 1rem;
  color: #2D3748;
  background: white;
  
  &:focus {
    border-color: #77AABD;
    outline: none;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #CBD5E0;
  border-radius: 5px;
  font-size: 1rem;
  color: #2D3748;
  
  &:focus {
    border-color: #77AABD;
    outline: none;
  }
`;

const ResultsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const ResultCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ResultIcon = styled.div`
  font-size: 2rem;
  color: #77AABD;
  margin-bottom: 1rem;
`;

const ResultTitle = styled.div`
  color: #4A5568;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ResultValue = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2E4756;
  margin-bottom: 0.5rem;
`;

const ResultDelta = styled.div`
  color: ${props => props.positive ? '#48BB78' : '#E53E3E'};
  font-size: 0.9rem;
  font-weight: 500;
`;

const ChartContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 400px;
`;

const ChartTitle = styled.h3`
  color: #2E4756;
  margin-bottom: 1rem;
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

const SimulateButton = styled.button`
  background: #2E4756;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background: #4A7A8C;
  }

  &:disabled {
    background: #CBD5E0;
    cursor: not-allowed;
  }

  .spinning {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default AudienceSimulation;