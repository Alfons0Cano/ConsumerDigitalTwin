import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaHeart, FaComments, FaSearch } from 'react-icons/fa';
import { getSentimentData, getTimeSeriesData } from '../../services/demoData';
import LineChart from '../../components/charts/LineChart';

const SentimentAnalysis = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [searchTerm, setSearchTerm] = useState('');
  const [sentimentData, setSentimentData] = useState(null);
  const [trendData, setTrendData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSentimentData(getSentimentData());
        setTrendData(getTimeSeriesData(7));
      } catch (error) {
        console.error('Error fetching sentiment data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedPeriod]);

  if (loading) {
    return (
      <PageContainer>
        <LoadingMessage>Cargando análisis de sentimiento...</LoadingMessage>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header>
        <Title>
          <FaHeart />
          <span>Análisis de Sentimientos</span>
        </Title>
        <Description>
          Analiza el sentimiento y la opinión de los consumidores sobre tu marca
        </Description>
      </Header>

      <Controls>
        <SearchBar>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput 
            type="text"
            placeholder="Buscar por palabra clave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>

        <PeriodSelector>
          <PeriodButton 
            active={selectedPeriod === '24h'}
            onClick={() => setSelectedPeriod('24h')}
          >
            24h
          </PeriodButton>
          <PeriodButton 
            active={selectedPeriod === '7d'}
            onClick={() => setSelectedPeriod('7d')}
          >
            7 días
          </PeriodButton>
          <PeriodButton 
            active={selectedPeriod === '30d'}
            onClick={() => setSelectedPeriod('30d')}
          >
            30 días
          </PeriodButton>
          <PeriodButton 
            active={selectedPeriod === '90d'}
            onClick={() => setSelectedPeriod('90d')}
          >
            90 días
          </PeriodButton>
        </PeriodSelector>
      </Controls>

      <Content>
        <MainMetrics>
          <MetricCard>
            <MetricIcon positive>
              <FaHeart />
            </MetricIcon>
            <MetricContent>
              <MetricValue>{sentimentData.positive}%</MetricValue>
              <MetricLabel>Sentimiento Positivo</MetricLabel>
              <MetricTrend positive>↑ 5% vs periodo anterior</MetricTrend>
            </MetricContent>
          </MetricCard>

          <MetricCard>
            <MetricIcon negative>
              <FaHeart />
            </MetricIcon>
            <MetricContent>
              <MetricValue>{sentimentData.negative}%</MetricValue>
              <MetricLabel>Sentimiento Negativo</MetricLabel>
              <MetricTrend negative>↑ 2% vs periodo anterior</MetricTrend>
            </MetricContent>
          </MetricCard>

          <MetricCard>
            <MetricIcon neutral>
              <FaHeart />
            </MetricIcon>
            <MetricContent>
              <MetricValue>{sentimentData.neutral}%</MetricValue>
              <MetricLabel>Sentimiento Neutral</MetricLabel>
              <MetricTrend>↓ 7% vs periodo anterior</MetricTrend>
            </MetricContent>
          </MetricCard>
        </MainMetrics>

        <AnalysisSection>
          <ChartSection>
            <SectionTitle>Evolución del Sentimiento</SectionTitle>
            <LineChart data={trendData} color="#4CAF50" />
          </ChartSection>

          <TopicsSection>
            <SectionTitle>Temas Principales</SectionTitle>
            <TopicsList>
              {sentimentData.topics.map((topic, index) => (
                <TopicItem key={index}>
                  <TopicName>{topic.name}</TopicName>
                  <TopicBar>
                    <TopicProgress positive style={{ width: `${topic.positive}%` }} />
                    <TopicProgress negative style={{ width: `${topic.negative}%` }} />
                  </TopicBar>
                  <TopicMetrics>
                    <TopicMetric>{topic.positive}% positivo</TopicMetric>
                    <TopicMetric>{topic.negative}% negativo</TopicMetric>
                  </TopicMetrics>
                </TopicItem>
              ))}
            </TopicsList>
          </TopicsSection>
        </AnalysisSection>

        <RecentMentions>
          <SectionTitle>
            <FaComments />
            Menciones Recientes
          </SectionTitle>
          
          <MentionsList>
            {sentimentData.mentions.map((mention, index) => (
              <MentionCard key={index} sentiment={mention.sentiment}>
                <MentionHeader>
                  <MentionAuthor>@{mention.author}</MentionAuthor>
                  <MentionTime>{new Date(mention.time).toLocaleString()}</MentionTime>
                  <SentimentBadge sentiment={mention.sentiment}>
                    {mention.sentiment === 'positive' ? 'Positivo' : 
                     mention.sentiment === 'negative' ? 'Negativo' : 'Neutral'}
                  </SentimentBadge>
                </MentionHeader>
                <MentionContent>{mention.content}</MentionContent>
                <MentionSource>{mention.source}</MentionSource>
              </MentionCard>
            ))}
          </MentionsList>
        </RecentMentions>
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchBar = styled.div`
  flex: 1;
  max-width: 400px;
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

const PeriodSelector = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const PeriodButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.active ? '#77AABD' : '#CBD5E0'};
  background: ${props => props.active ? '#77AABD' : 'white'};
  color: ${props => props.active ? 'white' : '#4A5568'};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: ${props => props.active ? '#77AABD' : '#F7FAFC'};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MainMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const MetricCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MetricIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: ${props => {
    if (props.positive) return '#F0FFF4';
    if (props.negative) return '#FFF5F5';
    return '#F7FAFC';
  }};
  color: ${props => {
    if (props.positive) return '#48BB78';
    if (props.negative) return '#F56565';
    return '#4A5568';
  }};
`;

const MetricContent = styled.div``;

const MetricValue = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2E4756;
  margin-bottom: 0.2rem;
`;

const MetricLabel = styled.div`
  color: #4A5568;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const MetricTrend = styled.div`
  font-size: 0.8rem;
  color: ${props => {
    if (props.positive) return '#48BB78';
    if (props.negative) return '#F56565';
    return '#4A5568';
  }};
`;

const AnalysisSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ChartSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: #2E4756;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TopicsSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TopicsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TopicItem = styled.div``;

const TopicName = styled.div`
  font-weight: 500;
  color: #2E4756;
  margin-bottom: 0.5rem;
`;

const TopicBar = styled.div`
  height: 8px;
  background: #F7FAFC;
  border-radius: 4px;
  display: flex;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

const TopicProgress = styled.div`
  height: 100%;
  background: ${props => props.positive ? '#48BB78' : '#F56565'};
`;

const TopicMetrics = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopicMetric = styled.div`
  font-size: 0.8rem;
  color: #4A5568;
`;

const RecentMentions = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MentionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MentionCard = styled.div`
  padding: 1rem;
  border-radius: 5px;
  background: ${props => props.positive ? '#F0FFF4' : props.negative ? '#FFF5F5' : '#F7FAFC'};
`;

const MentionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const MentionAuthor = styled.div`
  font-weight: 500;
  color: #2E4756;
`;

const MentionTime = styled.div`
  color: #4A5568;
  font-size: 0.8rem;
`;

const SentimentBadge = styled.div`
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  background: ${props => props.positive ? '#48BB78' : '#F56565'};
  color: white;
`;

const MentionContent = styled.div`
  color: #2D3748;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const MentionSource = styled.div`
  color: #4A5568;
  font-size: 0.8rem;
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #666;
`;

export default SentimentAnalysis;