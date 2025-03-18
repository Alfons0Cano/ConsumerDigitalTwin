import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChartLine, FaSearch, FaFilter, FaDownload } from 'react-icons/fa';

const TrendPrediction = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const dummyTrends = [
    { id: 1, name: 'Sostenibilidad', growth: 85, confidence: 92, category: 'eco' },
    { id: 2, name: 'Comercio Social', growth: 78, confidence: 88, category: 'ecommerce' },
    { id: 3, name: 'Realidad Aumentada', growth: 72, confidence: 85, category: 'tech' },
    { id: 4, name: 'Bienestar Mental', growth: 68, confidence: 90, category: 'health' },
  ];

  return (
    <PageContainer>
      <Header>
        <Title>
          <FaChartLine />
          <span>Predicción de Tendencias</span>
        </Title>
        <Description>
          Identifica y analiza tendencias emergentes en tu mercado utilizando IA
        </Description>
      </Header>

      <Controls>
        <SearchBar>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput 
            type="text"
            placeholder="Buscar tendencias..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>

        <FilterSection>
          <FilterGroup>
            <FilterLabel>Período</FilterLabel>
            <Select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option value="7d">7 días</option>
              <option value="30d">30 días</option>
              <option value="90d">90 días</option>
              <option value="1y">1 año</option>
            </Select>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Categoría</FilterLabel>
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">Todas</option>
              <option value="tech">Tecnología</option>
              <option value="eco">Sostenibilidad</option>
              <option value="health">Salud</option>
              <option value="ecommerce">E-commerce</option>
            </Select>
          </FilterGroup>
        </FilterSection>
      </Controls>

      <Content>
        <TrendGrid>
          {dummyTrends.map(trend => (
            <TrendCard key={trend.id}>
              <TrendHeader>
                <TrendName>{trend.name}</TrendName>
                <TrendCategory>{trend.category}</TrendCategory>
              </TrendHeader>
              
              <TrendMetrics>
                <Metric>
                  <MetricLabel>Crecimiento</MetricLabel>
                  <MetricValue positive>{trend.growth}%</MetricValue>
                  <MetricBar>
                    <MetricProgress width={trend.growth} />
                  </MetricBar>
                </Metric>
                
                <Metric>
                  <MetricLabel>Confianza</MetricLabel>
                  <MetricValue>{trend.confidence}%</MetricValue>
                  <MetricBar>
                    <MetricProgress width={trend.confidence} />
                  </MetricBar>
                </Metric>
              </TrendMetrics>

              <TrendActions>
                <ActionButton>
                  <FaDownload /> Informe Detallado
                </ActionButton>
              </TrendActions>
            </TrendCard>
          ))}
        </TrendGrid>

        <InsightsSection>
          <SectionTitle>
            <FaFilter />
            Insights Clave
          </SectionTitle>
          
          <InsightsList>
            <InsightCard>
              <InsightTitle>Crecimiento Rápido</InsightTitle>
              <InsightText>
                La tendencia de sostenibilidad muestra un crecimiento acelerado del 85% en los últimos 30 días.
              </InsightText>
            </InsightCard>

            <InsightCard>
              <InsightTitle>Alta Confianza</InsightTitle>
              <InsightText>
                El análisis predice con un 92% de confianza que esta tendencia continuará durante los próximos 6 meses.
              </InsightText>
            </InsightCard>

            <InsightCard>
              <InsightTitle>Oportunidad de Mercado</InsightTitle>
              <InsightText>
                Se recomienda desarrollar productos/servicios alineados con la sostenibilidad para capitalizar esta tendencia.
              </InsightText>
            </InsightCard>
          </InsightsList>
        </InsightsSection>
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
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: center;
`;

const SearchBar = styled.div`
  flex: 1;
  min-width: 300px;
  position: relative;
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

const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FilterLabel = styled.label`
  font-weight: 500;
  color: #4A5568;
  font-size: 0.9rem;
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #CBD5E0;
  border-radius: 5px;
  font-size: 1rem;
  min-width: 150px;
  
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

const TrendGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const TrendCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TrendHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const TrendName = styled.h3`
  font-size: 1.2rem;
  color: #2E4756;
  margin: 0;
`;

const TrendCategory = styled.span`
  background: #EDF2F7;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #4A5568;
  text-transform: capitalize;
`;

const TrendMetrics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Metric = styled.div``;

const MetricLabel = styled.div`
  font-size: 0.9rem;
  color: #4A5568;
  margin-bottom: 0.3rem;
`;

const MetricValue = styled.div`
  font-weight: 600;
  color: ${props => props.positive ? '#48BB78' : '#2E4756'};
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
  background: #77AABD;
  width: ${props => props.width}%;
`;

const TrendActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #77AABD;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.5rem;
  
  &:hover {
    color: #2E4756;
  }
`;

const InsightsSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  color: #2E4756;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const InsightsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InsightCard = styled.div`
  padding: 1rem;
  background: #F7FAFC;
  border-radius: 5px;
`;

const InsightTitle = styled.h4`
  color: #2E4756;
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
`;

const InsightText = styled.p`
  color: #4A5568;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
`;

export default TrendPrediction;