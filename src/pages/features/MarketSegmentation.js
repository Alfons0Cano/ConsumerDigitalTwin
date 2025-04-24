import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaUsers, FaChartPie, FaSearch, FaDownload, FaChartLine, FaInfoCircle } from 'react-icons/fa';
import { getMarketSegmentationData } from '../../services/demoData';
import LineChart from '../../components/charts/LineChart';

const MarketSegmentation = () => {
  const [selectedSegment, setSelectedSegment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('30d');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        const results = getMarketSegmentationData(selectedSegment, dateRange);
        setData(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedSegment, dateRange]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSegments = data?.segments.filter(segment =>
    segment.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  if (loading) {
    return (
      <PageContainer>
        <LoadingMessage>Analizando segmentos de mercado...</LoadingMessage>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header>
        <Title>
          <FaUsers />
          <span>Segmentación de Mercado</span>
        </Title>
        <Description>
          Analiza y segmenta tu mercado para estrategias más efectivas
        </Description>
      </Header>

      <SummarySection>
        <SummaryCard>
          <SummaryIcon><FaChartPie /></SummaryIcon>
          <SummaryValue>{data.summary.totalSegments}</SummaryValue>
          <SummaryLabel>Segmentos Totales</SummaryLabel>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon><FaChartLine /></SummaryIcon>
          <SummaryValue>{data.summary.totalMarketSize}%</SummaryValue>
          <SummaryLabel>Tamaño del Mercado</SummaryLabel>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon><FaInfoCircle /></SummaryIcon>
          <SummaryValue>{data.summary.averageGrowth}%</SummaryValue>
          <SummaryLabel>Crecimiento Promedio</SummaryLabel>
        </SummaryCard>
      </SummarySection>

      <Controls>
        <SearchBar>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Buscar segmentos..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </SearchBar>

        <FilterGroup>
          <Label>Segmento</Label>
          <Select
            value={selectedSegment}
            onChange={(e) => setSelectedSegment(e.target.value)}
          >
            <option value="all">Todos los Segmentos</option>
            {data.segments.map(segment => (
              <option key={segment.id} value={segment.id}>
                {segment.name}
              </option>
            ))}
          </Select>
        </FilterGroup>

        <FilterGroup>
          <Label>Período</Label>
          <Select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="7d">Últimos 7 días</option>
            <option value="30d">Últimos 30 días</option>
            <option value="90d">Últimos 90 días</option>
          </Select>
        </FilterGroup>
      </Controls>

      <Content>
        <MainSection>
          <SectionTitle>
            <FaChartPie />
            Análisis de Segmentos
          </SectionTitle>
          
          <SegmentGrid>
            {filteredSegments.map(segment => (
              <SegmentCard key={segment.id}>
                <SegmentHeader>
                  <div>
                    <SegmentName>{segment.name}</SegmentName>
                    <SegmentSize>{segment.size}% del mercado</SegmentSize>
                  </div>
                  <GrowthTag positive={segment.growth > 0}>
                    {segment.growth > 0 ? '+' : ''}{segment.growth}%
                  </GrowthTag>
                </SegmentHeader>

                <MetricsSection>
                  <MetricItem>
                    <MetricLabel>Engagement</MetricLabel>
                    <MetricValue>{segment.metrics.engagement}%</MetricValue>
                    <MetricBar>
                      <MetricProgress width={segment.metrics.engagement} />
                    </MetricBar>
                  </MetricItem>

                  <MetricItem>
                    <MetricLabel>Retención</MetricLabel>
                    <MetricValue>{segment.metrics.retention}%</MetricValue>
                    <MetricBar>
                      <MetricProgress width={segment.metrics.retention} />
                    </MetricBar>
                  </MetricItem>

                  <MetricItem>
                    <MetricLabel>Conversión</MetricLabel>
                    <MetricValue>{segment.metrics.conversion}%</MetricValue>
                    <MetricBar>
                      <MetricProgress width={segment.metrics.conversion * 20} />
                    </MetricBar>
                  </MetricItem>
                </MetricsSection>

                <DemographicsSection>
                  <DemographicItem>
                    <DemographicLabel>Edad</DemographicLabel>
                    <DemographicValue>{segment.demographics.age}</DemographicValue>
                  </DemographicItem>
                  <DemographicItem>
                    <DemographicLabel>Ingresos</DemographicLabel>
                    <DemographicValue>{segment.demographics.income}</DemographicValue>
                  </DemographicItem>
                  <DemographicItem>
                    <DemographicLabel>Educación</DemographicLabel>
                    <DemographicValue>{segment.demographics.education}</DemographicValue>
                  </DemographicItem>
                </DemographicsSection>

                <BehaviorSection>
                  <BehaviorTitle>Comportamiento</BehaviorTitle>
                  <BehaviorGrid>
                    <BehaviorItem>
                      <BehaviorLabel>Frecuencia de Compra</BehaviorLabel>
                      <BehaviorValue>{segment.behavior.purchaseFrequency}</BehaviorValue>
                    </BehaviorItem>
                    <BehaviorItem>
                      <BehaviorLabel>Canal Preferido</BehaviorLabel>
                      <BehaviorValue>{segment.behavior.preferredChannel}</BehaviorValue>
                    </BehaviorItem>
                    <BehaviorItem>
                      <BehaviorLabel>Pedido Promedio</BehaviorLabel>
                      <BehaviorValue>{segment.behavior.averageOrder}</BehaviorValue>
                    </BehaviorItem>
                    <BehaviorItem>
                      <BehaviorLabel>Lealtad</BehaviorLabel>
                      <BehaviorValue>{segment.behavior.loyalty}</BehaviorValue>
                    </BehaviorItem>
                  </BehaviorGrid>
                </BehaviorSection>

                <ChartContainer>
                  <ChartTitle>Tendencia de Engagement</ChartTitle>
                  <LineChart 
                    data={segment.trends}
                    color="#77AABD"
                    height={200}
                  />
                </ChartContainer>

                <ActionButton>
                  Ver Detalles Completos
                </ActionButton>
              </SegmentCard>
            ))}
          </SegmentGrid>
        </MainSection>

        <SideSection>
          <SectionTitle>Insights Clave</SectionTitle>
          
          <InsightsList>
            {data.insights.map(insight => (
              <InsightCard key={insight.id}>
                <InsightHeader>
                  <InsightTitle>{insight.title}</InsightTitle>
                  <ImpactBadge impact={insight.impact}>
                    Impacto {insight.impact}
                  </ImpactBadge>
                </InsightHeader>
                <InsightDescription>{insight.description}</InsightDescription>
                <InsightSegment>{insight.segment}</InsightSegment>
                <InsightMetrics>
                  {Object.entries(insight.metrics).map(([key, value]) => (
                    <InsightMetric key={key}>
                      <InsightMetricLabel>{key}:</InsightMetricLabel>
                      <InsightMetricValue>{value}</InsightMetricValue>
                    </InsightMetric>
                  ))}
                </InsightMetrics>
              </InsightCard>
            ))}
          </InsightsList>

          <TrendsSection>
            <SectionTitle>Tendencias Clave</SectionTitle>
            <TrendsList>
              {data.summary.keyTrends.map((trend, index) => (
                <TrendItem key={index}>
                  <TrendNumber>{index + 1}</TrendNumber>
                  <TrendText>{trend}</TrendText>
                </TrendItem>
              ))}
            </TrendsList>
          </TrendsSection>

          <ExportSection>
            <ExportButton>
              <FaDownload /> Exportar Análisis
            </ExportButton>
          </ExportSection>
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
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SearchBar = styled.div`
  position: relative;
  min-width: 300px;
  max-width: 400px;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #4A5568;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #CBD5E0;
  border-radius: 5px;
  font-size: 0.9rem;
  height: 36px;
  
  &:focus {
    outline: none;
    border-color: #77AABD;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 200px;
`;

const Label = styled.label`
  font-weight: 500;
  color: #4A5568;
  font-size: 0.9rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #CBD5E0;
  border-radius: 5px;
  font-size: 0.9rem;
  height: 36px;
  
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

const MainSection = styled.div``;

const SideSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  color: #2E4756;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const SegmentGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const SegmentCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SegmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const SegmentName = styled.h3`
  font-size: 1.2rem;
  color: #2E4756;
  margin: 0 0 0.5rem 0;
`;

const SegmentSize = styled.div`
  font-size: 0.9rem;
  color: #718096;
`;

const GrowthTag = styled.div`
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
  background: ${props => props.positive ? '#D1FAE5' : '#FEE2E2'};
  color: ${props => props.positive ? '#059669' : '#DC2626'};
`;

const MetricsSection = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const MetricItem = styled.div``;

const MetricLabel = styled.div`
  font-size: 0.9rem;
  color: #718096;
  margin-bottom: 0.25rem;
`;

const MetricValue = styled.div`
  font-weight: 600;
  color: #2E4756;
  margin-bottom: 0.5rem;
`;

const MetricBar = styled.div`
  height: 6px;
  background: #EDF2F7;
  border-radius: 3px;
  overflow: hidden;
`;

const MetricProgress = styled.div`
  height: 100%;
  width: ${props => props.width}%;
  background: #77AABD;
`;

const DemographicsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #F7FAFC;
  border-radius: 8px;
`;

const DemographicItem = styled.div``;

const DemographicLabel = styled.div`
  font-size: 0.8rem;
  color: #718096;
  margin-bottom: 0.25rem;
`;

const DemographicValue = styled.div`
  font-weight: 500;
  color: #2E4756;
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

const InsightsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InsightCard = styled.div`
  background: white;
  padding: 1.25rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const InsightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const InsightTitle = styled.h4`
  font-size: 1rem;
  color: #2E4756;
  margin: 0;
`;

const ImpactBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${props => 
    props.impact === 'alto' ? '#FEE2E2' :
    props.impact === 'medio' ? '#FEF3C7' :
    '#D1FAE5'
  };
  color: ${props => 
    props.impact === 'alto' ? '#DC2626' :
    props.impact === 'medio' ? '#D97706' :
    '#059669'
  };
`;

const InsightDescription = styled.p`
  font-size: 0.9rem;
  color: #4A5568;
  margin-bottom: 0.75rem;
`;

const InsightSegment = styled.div`
  font-size: 0.8rem;
  color: #718096;
`;

const ExportSection = styled.div`
  margin-top: auto;
`;

const ExportButton = styled.button`
  width: 100%;
  background: none;
  border: 1px solid #2E4756;
  color: #2E4756;
  padding: 0.75rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background: #2E4756;
    color: white;
  }
`;

const SummarySection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

const BehaviorSection = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: #F7FAFC;
  border-radius: 8px;
`;

const BehaviorTitle = styled.h4`
  color: #2E4756;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const BehaviorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const BehaviorItem = styled.div``;

const BehaviorLabel = styled.div`
  font-size: 0.8rem;
  color: #718096;
  margin-bottom: 0.25rem;
`;

const BehaviorValue = styled.div`
  font-weight: 500;
  color: #2E4756;
`;

const ChartContainer = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: #F7FAFC;
  border-radius: 8px;
`;

const ChartTitle = styled.h4`
  color: #2E4756;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const InsightMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const InsightMetric = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const InsightMetricLabel = styled.div`
  font-size: 0.7rem;
  color: #718096;
  text-transform: capitalize;
`;

const InsightMetricValue = styled.div`
  font-size: 0.8rem;
  color: #2E4756;
  font-weight: 500;
`;

const TrendsSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const TrendsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TrendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: #F7FAFC;
  border-radius: 8px;
`;

const TrendNumber = styled.div`
  width: 24px;
  height: 24px;
  background: #77AABD;
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
`;

const TrendText = styled.div`
  flex: 1;
  font-size: 0.9rem;
  color: #2E4756;
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #666;
`;

export default MarketSegmentation;