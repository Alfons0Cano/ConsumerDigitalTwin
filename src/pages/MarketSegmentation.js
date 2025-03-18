import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUsers, FaChartPie, FaSearch, FaDownload } from 'react-icons/fa';

const MarketSegmentation = () => {
  const [selectedSegment, setSelectedSegment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('30d');

  const segments = [
    {
      id: 1,
      name: 'Profesionales Jóvenes',
      size: 35,
      growth: 12,
      metrics: {
        engagement: 78,
        retention: 65,
        conversion: 4.2
      },
      demographics: {
        age: '25-34',
        income: '30k-50k',
        education: 'Universidad'
      }
    },
    {
      id: 2,
      name: 'Familias Suburbanas',
      size: 28,
      growth: 8,
      metrics: {
        engagement: 82,
        retention: 75,
        conversion: 3.8
      },
      demographics: {
        age: '35-44',
        income: '50k-70k',
        education: 'Universidad'
      }
    },
    {
      id: 3,
      name: 'Ejecutivos Senior',
      size: 18,
      growth: 15,
      metrics: {
        engagement: 65,
        retention: 85,
        conversion: 5.5
      },
      demographics: {
        age: '45-54',
        income: '70k+',
        education: 'Postgrado'
      }
    }
  ];

  const insights = [
    {
      id: 1,
      title: 'Comportamiento de Compra',
      description: 'Los profesionales jóvenes muestran preferencia por compras móviles',
      segment: 'Profesionales Jóvenes',
      impact: 'alto'
    },
    {
      id: 2,
      title: 'Canales Preferidos',
      description: 'Las familias suburbanas responden mejor a email marketing',
      segment: 'Familias Suburbanas',
      impact: 'medio'
    },
    {
      id: 3,
      title: 'Sensibilidad al Precio',
      description: 'Ejecutivos senior priorizan calidad sobre precio',
      segment: 'Ejecutivos Senior',
      impact: 'alto'
    }
  ];

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

      <Controls>
        <SearchBar>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Buscar segmentos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>

        <FilterGroup>
          <Label>Segmento</Label>
          <Select
            value={selectedSegment}
            onChange={(e) => setSelectedSegment(e.target.value)}
          >
            <option value="all">Todos los Segmentos</option>
            {segments.map(segment => (
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
            {segments.map(segment => (
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
            {insights.map(insight => (
              <InsightCard key={insight.id}>
                <InsightHeader>
                  <InsightTitle>{insight.title}</InsightTitle>
                  <ImpactBadge impact={insight.impact}>
                    Impacto {insight.impact}
                  </ImpactBadge>
                </InsightHeader>
                <InsightDescription>{insight.description}</InsightDescription>
                <InsightSegment>{insight.segment}</InsightSegment>
              </InsightCard>
            ))}
          </InsightsList>

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
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  align-items: flex-end;
`;

const SearchBar = styled.div`
  flex: 1;
  position: relative;
  min-width: 300px;
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
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #CBD5E0;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #77AABD;
  }
`;

const FilterGroup = styled.div`
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
  min-width: 200px;
  
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

export default MarketSegmentation;