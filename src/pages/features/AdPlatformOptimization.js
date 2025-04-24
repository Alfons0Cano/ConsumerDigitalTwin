import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBullhorn, FaFilter, FaChartLine, FaEuroSign, FaUsers } from 'react-icons/fa';
import { getAdPlatformOptimizationData } from '../../services/demoData';
import LineChart from '../../components/charts/LineChart';

const AdPlatformOptimization = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [dateRange, setDateRange] = useState('30d');
  const [budget, setBudget] = useState('5000');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        const results = getAdPlatformOptimizationData(selectedPlatform, dateRange, parseFloat(budget));
        setData(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedPlatform, dateRange, budget]);

  const handleBudgetChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setBudget(value);
    }
  };

  const handleApplyRecommendation = (recommendation) => {
    // Simulate applying recommendation
    console.log('Applying recommendation:', recommendation);
  };

  const renderPlatformIcon = (platform) => {
    const IconComponent = data.platforms.find(p => p.id === platform).icon;
    return <IconComponent size={24} color={data.platforms.find(p => p.id === platform).color} />;
  };

  const renderPlatformIconSmall = (platform) => {
    const IconComponent = data.platforms.find(p => p.id === platform).icon;
    return <IconComponent size={20} color={data.platforms.find(p => p.id === platform).color} />;
  };

  if (loading) {
    return (
      <PageContainer>
        <LoadingMessage>Cargando datos de optimización...</LoadingMessage>
      </PageContainer>
    );
  }

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
            {data.platforms.map(platform => (
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
            type="text"
            value={budget}
            onChange={handleBudgetChange}
            placeholder="Ej: 5000"
          />
        </ControlGroup>
      </Controls>

      <SummarySection>
        <SummaryCard>
          <SummaryIcon><FaEuroSign /></SummaryIcon>
          <SummaryValue>€{data.summary.totalSpend.toLocaleString()}</SummaryValue>
          <SummaryLabel>Gasto Total</SummaryLabel>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon><FaUsers /></SummaryIcon>
          <SummaryValue>{data.summary.totalImpressions.toLocaleString()}</SummaryValue>
          <SummaryLabel>Impresiones</SummaryLabel>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon><FaChartLine /></SummaryIcon>
          <SummaryValue>{data.summary.averageCTR}%</SummaryValue>
          <SummaryLabel>CTR Promedio</SummaryLabel>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon><FaEuroSign /></SummaryIcon>
          <SummaryValue>€{data.summary.averageCPC}</SummaryValue>
          <SummaryLabel>CPC Promedio</SummaryLabel>
        </SummaryCard>
      </SummarySection>

      <Content>
        <MainSection>
          <SectionTitle>Rendimiento por Plataforma</SectionTitle>
          <MetricsGrid>
            {data.metrics.map(metric => (
              <MetricCard key={metric.id}>
                <PlatformHeader>
                  {renderPlatformIcon(metric.platform)}
                  <PlatformName>
                    {data.platforms.find(p => p.id === metric.platform).name}
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

                <ChartContainer>
                  <ChartTitle>Tendencia de Rendimiento</ChartTitle>
                  <LineChart 
                    data={data.performanceTrends.find(t => t.platform === metric.platform).data}
                    color={data.platforms.find(p => p.id === metric.platform).color}
                    height={200}
                  />
                </ChartContainer>
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
            {data.recommendations.map((rec, index) => (
              <RecommendationCard key={index}>
                <RecommendationHeader>
                  {renderPlatformIconSmall(rec.platform)}
                  <RecommendationTitle>{rec.title}</RecommendationTitle>
                </RecommendationHeader>
                <RecommendationDescription>
                  {rec.description}
                </RecommendationDescription>
                <RecommendationDetails>
                  <DetailItem>
                    <DetailLabel>Impacto:</DetailLabel>
                    <DetailValue>{rec.impact}</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>Dificultad:</DetailLabel>
                    <DetailValue>{rec.difficulty}</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>Prioridad:</DetailLabel>
                    <DetailValue priority={rec.priority}>{rec.priority}</DetailValue>
                  </DetailItem>
                </RecommendationDetails>
                <ActionButton onClick={() => handleApplyRecommendation(rec)}>
                  Aplicar Recomendación
                </ActionButton>
              </RecommendationCard>
            ))}
          </RecommendationsList>

          <BudgetSection>
            <SectionTitle>Distribución de Presupuesto</SectionTitle>
            <BudgetGrid>
              {data.budgetAllocation.current.map((allocation, index) => (
                <BudgetCard key={index}>
                  <BudgetHeader>
                    {renderPlatformIconSmall(allocation.platform)}
                    <BudgetPlatform>
                      {data.platforms.find(p => p.id === allocation.platform).name}
                    </BudgetPlatform>
                  </BudgetHeader>
                  <BudgetBar>
                    <BudgetFill percentage={allocation.percentage} />
                  </BudgetBar>
                  <BudgetPercentage>{allocation.percentage}%</BudgetPercentage>
                </BudgetCard>
              ))}
            </BudgetGrid>
          </BudgetSection>
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

const RecommendationDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const DetailLabel = styled.div`
  font-size: 0.7rem;
  color: #718096;
`;

const DetailValue = styled.div`
  font-size: 0.8rem;
  color: ${props => props.priority === 'Alta' ? '#48BB78' : props.priority === 'Media' ? '#2E4756' : '#718096'};
  font-weight: 500;
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

const SummarySection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SummaryCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const SummaryIcon = styled.div`
  font-size: 2rem;
  color: #77AABD;
  margin-bottom: 1rem;
`;

const SummaryValue = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2E4756;
  margin-bottom: 0.5rem;
`;

const SummaryLabel = styled.div`
  color: #718096;
  font-size: 0.9rem;
`;

const ChartContainer = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background: #F7FAFC;
  border-radius: 5px;
`;

const ChartTitle = styled.h4`
  color: #2E4756;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const BudgetSection = styled.div`
  margin-top: 2rem;
`;

const BudgetGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

const BudgetCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BudgetHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const BudgetPlatform = styled.div`
  font-size: 0.9rem;
  color: #2E4756;
  font-weight: 500;
`;

const BudgetBar = styled.div`
  height: 8px;
  background: #EDF2F7;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

const BudgetFill = styled.div`
  height: 100%;
  background: #77AABD;
  width: ${props => props.percentage}%;
  transition: width 0.3s ease;
`;

const BudgetPercentage = styled.div`
  font-size: 0.8rem;
  color: #718096;
  text-align: right;
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #666;
`;

export default AdPlatformOptimization;