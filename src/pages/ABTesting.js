import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFlask, FaChartPie, FaUsers, FaArrowRight } from 'react-icons/fa';

const ABTesting = () => {
  const [testConfig, setTestConfig] = useState({
    testName: '',
    variant: 'color',
    sampleSize: 1000,
    duration: 7,
    targetMetric: 'conversion'
  });

  const handleStartTest = () => {
    // Aquí iría la lógica para iniciar el test A/B
    console.log('Iniciando test A/B...', testConfig);
  };

  return (
    <PageContainer>
      <Header>
        <Title>
          <FaFlask />
          <span>Pruebas A/B</span>
        </Title>
        <Description>
          Optimiza tus campañas realizando experimentos controlados con variantes
        </Description>
      </Header>

      <Content>
        <TestConfigSection>
          <SectionTitle>Configuración del Test</SectionTitle>
          
          <ConfigForm>
            <FormGroup>
              <Label>Nombre del Test</Label>
              <Input
                type="text"
                value={testConfig.testName}
                onChange={(e) => setTestConfig({...testConfig, testName: e.target.value})}
                placeholder="Ej: Test Botón CTA Homepage"
              />
            </FormGroup>

            <FormGroup>
              <Label>Elemento a Probar</Label>
              <Select
                value={testConfig.variant}
                onChange={(e) => setTestConfig({...testConfig, variant: e.target.value})}
              >
                <option value="color">Color</option>
                <option value="text">Texto</option>
                <option value="image">Imagen</option>
                <option value="layout">Disposición</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Tamaño de la Muestra</Label>
              <Input
                type="number"
                value={testConfig.sampleSize}
                onChange={(e) => setTestConfig({...testConfig, sampleSize: Number(e.target.value)})}
                min="100"
                max="100000"
              />
            </FormGroup>

            <FormGroup>
              <Label>Duración (días)</Label>
              <Input
                type="number"
                value={testConfig.duration}
                onChange={(e) => setTestConfig({...testConfig, duration: Number(e.target.value)})}
                min="1"
                max="30"
              />
            </FormGroup>

            <FormGroup>
              <Label>Métrica Objetivo</Label>
              <Select
                value={testConfig.targetMetric}
                onChange={(e) => setTestConfig({...testConfig, targetMetric: e.target.value})}
              >
                <option value="conversion">Tasa de Conversión</option>
                <option value="engagement">Engagement</option>
                <option value="revenue">Ingresos</option>
                <option value="retention">Retención</option>
              </Select>
            </FormGroup>

            <StartTestButton onClick={handleStartTest}>
              <FaArrowRight />
              Iniciar Test A/B
            </StartTestButton>
          </ConfigForm>
        </TestConfigSection>

        <ResultsSection>
          <SectionTitle>Resultados Activos</SectionTitle>
          
          <ActiveTestCard>
            <TestHeader>
              <TestName>Test CTA Principal</TestName>
              <TestStatus>En Progreso</TestStatus>
            </TestHeader>

            <TestProgress>
              <ProgressBar progress={65} />
              <ProgressText>65% completado</ProgressText>
            </TestProgress>

            <TestVariants>
              <Variant>
                <VariantLabel>Variante A (Control)</VariantLabel>
                <VariantMetrics>
                  <Metric>
                    <MetricLabel>Conversiones</MetricLabel>
                    <MetricValue>3.2%</MetricValue>
                  </Metric>
                  <Metric>
                    <MetricLabel>Usuarios</MetricLabel>
                    <MetricValue>2,345</MetricValue>
                  </Metric>
                </VariantMetrics>
              </Variant>

              <Variant winning>
                <VariantLabel>Variante B</VariantLabel>
                <VariantMetrics>
                  <Metric>
                    <MetricLabel>Conversiones</MetricLabel>
                    <MetricValue>4.1%</MetricValue>
                  </Metric>
                  <Metric>
                    <MetricLabel>Usuarios</MetricLabel>
                    <MetricValue>2,341</MetricValue>
                  </Metric>
                </VariantMetrics>
                <WinningBadge>Líder</WinningBadge>
              </Variant>
            </TestVariants>

            <SignificanceInfo>
              <FaChartPie />
              Confianza estadística: 95%
            </SignificanceInfo>
          </ActiveTestCard>

          <CompletedTestsSection>
            <SectionTitle>Tests Completados</SectionTitle>
            <TestList>
              <TestListItem>
                <TestListIcon><FaFlask /></TestListIcon>
                <TestListInfo>
                  <TestListName>Test Imágenes Homepage</TestListName>
                  <TestListMetrics>
                    <TestListMetric>+15% conversión</TestListMetric>
                    <TestListMetric>7 días</TestListMetric>
                    <TestListMetric>5,000 usuarios</TestListMetric>
                  </TestListMetrics>
                </TestListInfo>
                <TestListStatus completed>Completado</TestListStatus>
              </TestListItem>

              <TestListItem>
                <TestListIcon><FaFlask /></TestListIcon>
                <TestListInfo>
                  <TestListName>Test Texto Landing Page</TestListName>
                  <TestListMetrics>
                    <TestListMetric>+8% engagement</TestListMetric>
                    <TestListMetric>14 días</TestListMetric>
                    <TestListMetric>10,000 usuarios</TestListMetric>
                  </TestListMetrics>
                </TestListInfo>
                <TestListStatus completed>Completado</TestListStatus>
              </TestListItem>
            </TestList>
          </CompletedTestsSection>
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

const TestConfigSection = styled.div`
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

const StartTestButton = styled.button`
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
`;

const ResultsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ActiveTestCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const TestName = styled.h3`
  color: #2E4756;
  font-size: 1.2rem;
`;

const TestStatus = styled.span`
  background: #77AABD;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const TestProgress = styled.div`
  margin-bottom: 1.5rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #E2E8F0;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  overflow: hidden;
  
  &:after {
    content: '';
    display: block;
    width: ${props => props.progress}%;
    height: 100%;
    background: #77AABD;
    transition: width 0.3s ease;
  }
`;

const ProgressText = styled.div`
  color: #4A5568;
  font-size: 0.9rem;
`;

const TestVariants = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Variant = styled.div`
  background: ${props => props.winning ? '#F0FFF4' : '#F7FAFC'};
  border: 1px solid ${props => props.winning ? '#48BB78' : '#E2E8F0'};
  padding: 1rem;
  border-radius: 5px;
  position: relative;
`;

const VariantLabel = styled.div`
  font-weight: 600;
  color: #2E4756;
  margin-bottom: 1rem;
`;

const VariantMetrics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const Metric = styled.div``;

const MetricLabel = styled.div`
  color: #4A5568;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;

const MetricValue = styled.div`
  color: #2E4756;
  font-weight: 600;
`;

const WinningBadge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #48BB78;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const SignificanceInfo = styled.div`
  color: #4A5568;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const CompletedTestsSection = styled.div``;

const TestList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TestListItem = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const TestListIcon = styled.div`
  color: #77AABD;
  font-size: 1.5rem;
`;

const TestListInfo = styled.div`
  flex: 1;
`;

const TestListName = styled.div`
  font-weight: 600;
  color: #2E4756;
  margin-bottom: 0.3rem;
`;

const TestListMetrics = styled.div`
  display: flex;
  gap: 1rem;
`;

const TestListMetric = styled.span`
  color: #4A5568;
  font-size: 0.9rem;
`;

const TestListStatus = styled.div`
  color: ${props => props.completed ? '#48BB78' : '#77AABD'};
  font-weight: 500;
`;

export default ABTesting;