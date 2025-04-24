import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChartLine, FaSearch, FaFilter, FaDownload } from 'react-icons/fa';
import { getTrendPredictionData } from '../../services/demoData';
import LineChart from '../../components/charts/LineChart';

const TrendPrediction = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [trendData, setTrendData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTrend, setSelectedTrend] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        const data = getTrendPredictionData(selectedPeriod, selectedCategory);
        setTrendData(data);
      } catch (error) {
        console.error('Error fetching trend data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedPeriod, selectedCategory]);

  const handleTrendClick = (trend) => {
    setSelectedTrend(trend);
  };

  const handleDownloadReport = (trend) => {
    // Simulate report download
    console.log('Downloading report for:', trend.name);
  };

  const filteredTrends = trendData?.trends.filter(trend => 
    trend.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

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
        {loading ? (
          <LoadingMessage>Cargando tendencias...</LoadingMessage>
        ) : (
          <>
            <TrendGrid>
              {filteredTrends.map(trend => (
                <TrendCard key={trend.id} onClick={() => handleTrendClick(trend)}>
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
                    <ActionButton onClick={(e) => {
                      e.stopPropagation();
                      handleDownloadReport(trend);
                    }}>
                      <FaDownload /> Informe Detallado
                    </ActionButton>
                  </TrendActions>
                </TrendCard>
              ))}
            </TrendGrid>

            {selectedTrend && (
              <TrendDetailModal>
                <ModalContent>
                  <ModalHeader>
                    <ModalTitle>{selectedTrend.name}</ModalTitle>
                    <CloseButton onClick={() => setSelectedTrend(null)}>×</CloseButton>
                  </ModalHeader>
                  <ModalBody>
                    <ChartContainer>
                      <ChartTitle>Evolución de la Tendencia</ChartTitle>
                      <LineChart data={selectedTrend.data} color="#77AABD" />
                    </ChartContainer>
                    <TrendStats>
                      <Stat>
                        <StatLabel>Crecimiento</StatLabel>
                        <StatValue>{selectedTrend.growth}%</StatValue>
                      </Stat>
                      <Stat>
                        <StatLabel>Confianza</StatLabel>
                        <StatValue>{selectedTrend.confidence}%</StatValue>
                      </Stat>
                      <Stat>
                        <StatLabel>Categoría</StatLabel>
                        <StatValue>{selectedTrend.category}</StatValue>
                      </Stat>
                    </TrendStats>
                  </ModalBody>
                </ModalContent>
              </TrendDetailModal>
            )}

            <InsightsSection>
              <SectionTitle>
                <FaFilter />
                Insights Clave
              </SectionTitle>
              
              <InsightsList>
                {trendData?.insights.map((insight, index) => (
                  <InsightCard key={index}>
                    <InsightTitle>{insight.title}</InsightTitle>
                    <InsightText>{insight.text}</InsightText>
                  </InsightCard>
                ))}
              </InsightsList>
            </InsightsSection>
          </>
        )}
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

const Controls = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  background: white;
  padding: 0.75rem;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SearchBar = styled.div`
  position: relative;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #4A5568;
  font-size: 0.85rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.4rem 1rem 0.4rem 2rem;
  border: 1px solid #CBD5E0;
  border-radius: 4px;
  font-size: 0.85rem;
  height: 32px;
  
  &:focus {
    outline: none;
    border-color: #77AABD;
  }
`;

const FilterSection = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 130px;
  
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const FilterLabel = styled.label`
  font-weight: 500;
  color: #4A5568;
  font-size: 0.75rem;
  margin-bottom: 0.2rem;
`;

const Select = styled.select`
  padding: 0.4rem;
  border: 1px solid #CBD5E0;
  border-radius: 4px;
  font-size: 0.85rem;
  width: 100%;
  background: white;
  height: 32px;
  
  &:focus {
    outline: none;
    border-color: #77AABD;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.75rem;
  flex: 1;
  min-height: 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const TrendGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  align-items: start;
  overflow-y: auto;
  padding-right: 0.5rem;
  
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

const TrendCard = styled.div`
  background: white;
  padding: 0.6rem;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: fit-content;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }
`;

const TrendHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.4rem;
  gap: 0.4rem;
`;

const TrendName = styled.h3`
  font-size: 0.9rem;
  color: #2E4756;
  margin: 0;
  flex: 1;
`;

const TrendCategory = styled.span`
  background: #EDF2F7;
  padding: 0.15rem 0.4rem;
  border-radius: 10px;
  font-size: 0.65rem;
  color: #4A5568;
  text-transform: capitalize;
  white-space: nowrap;
`;

const TrendMetrics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 0.4rem;
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

const MetricLabel = styled.div`
  font-size: 0.7rem;
  color: #4A5568;
`;

const MetricValue = styled.div`
  font-weight: 600;
  color: ${props => props.positive ? '#48BB78' : '#2E4756'};
  font-size: 0.8rem;
`;

const MetricBar = styled.div`
  height: 2px;
  background: #EDF2F7;
  border-radius: 1px;
  overflow: hidden;
`;

const MetricProgress = styled.div`
  height: 100%;
  background: #77AABD;
  width: ${props => props.width}%;
  transition: width 0.3s ease;
`;

const TrendActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.4rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #77AABD;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;
  font-size: 0.7rem;
  padding: 0.2rem;
  
  &:hover {
    color: #2E4756;
  }
`;

const InsightsSection = styled.div`
  background: white;
  padding: 0.75rem;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: fit-content;
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
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
`;

const InsightsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InsightCard = styled.div`
  padding: 0.6rem;
  background: #F7FAFC;
  border-radius: 4px;
`;

const InsightTitle = styled.h4`
  color: #2E4756;
  margin: 0 0 0.2rem 0;
  font-size: 0.8rem;
`;

const InsightText = styled.p`
  color: #4A5568;
  font-size: 0.75rem;
  margin: 0;
  line-height: 1.3;
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #666;
`;

const TrendDetailModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #E2E8F0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h2`
  color: #2E4756;
  margin: 0;
  font-size: 1.5rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #4A5568;
  cursor: pointer;
  
  &:hover {
    color: #2E4756;
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;
`;

const ChartContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const ChartTitle = styled.h3`
  color: #2E4756;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const TrendStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Stat = styled.div`
  text-align: center;
  padding: 1rem;
  background: #F7FAFC;
  border-radius: 5px;
`;

const StatLabel = styled.div`
  color: #4A5568;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const StatValue = styled.div`
  color: #2E4756;
  font-size: 1.2rem;
  font-weight: 600;
`;

export default TrendPrediction;