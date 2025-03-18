import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart, FaChartLine, FaComments, FaSearch } from 'react-icons/fa';

const SentimentAnalysis = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [searchTerm, setSearchTerm] = useState('');

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
              <MetricValue>78%</MetricValue>
              <MetricLabel>Sentimiento Positivo</MetricLabel>
              <MetricTrend positive>↑ 5% vs periodo anterior</MetricTrend>
            </MetricContent>
          </MetricCard>

          <MetricCard>
            <MetricIcon negative>
              <FaHeart />
            </MetricIcon>
            <MetricContent>
              <MetricValue>12%</MetricValue>
              <MetricLabel>Sentimiento Negativo</MetricLabel>
              <MetricTrend negative>↑ 2% vs periodo anterior</MetricTrend>
            </MetricContent>
          </MetricCard>

          <MetricCard>
            <MetricIcon neutral>
              <FaHeart />
            </MetricIcon>
            <MetricContent>
              <MetricValue>10%</MetricValue>
              <MetricLabel>Sentimiento Neutral</MetricLabel>
              <MetricTrend>↓ 7% vs periodo anterior</MetricTrend>
            </MetricContent>
          </MetricCard>
        </MainMetrics>

        <AnalysisSection>
          <ChartSection>
            <SectionTitle>Evolución del Sentimiento</SectionTitle>
            <ChartPlaceholder>
              [Gráfico de evolución temporal]
            </ChartPlaceholder>
          </ChartSection>

          <TopicsSection>
            <SectionTitle>Temas Principales</SectionTitle>
            <TopicsList>
              <TopicItem>
                <TopicName>Atención al Cliente</TopicName>
                <TopicBar>
                  <TopicProgress positive style={{ width: '75%' }} />
                  <TopicProgress negative style={{ width: '25%' }} />
                </TopicBar>
                <TopicMetrics>
                  <TopicMetric>75% positivo</TopicMetric>
                  <TopicMetric>25% negativo</TopicMetric>
                </TopicMetrics>
              </TopicItem>

              <TopicItem>
                <TopicName>Calidad del Producto</TopicName>
                <TopicBar>
                  <TopicProgress positive style={{ width: '82%' }} />
                  <TopicProgress negative style={{ width: '18%' }} />
                </TopicBar>
                <TopicMetrics>
                  <TopicMetric>82% positivo</TopicMetric>
                  <TopicMetric>18% negativo</TopicMetric>
                </TopicMetrics>
              </TopicItem>

              <TopicItem>
                <TopicName>Precio</TopicName>
                <TopicBar>
                  <TopicProgress positive style={{ width: '60%' }} />
                  <TopicProgress negative style={{ width: '40%' }} />
                </TopicBar>
                <TopicMetrics>
                  <TopicMetric>60% positivo</TopicMetric>
                  <TopicMetric>40% negativo</TopicMetric>
                </TopicMetrics>
              </TopicItem>
            </TopicsList>
          </TopicsSection>
        </AnalysisSection>

        <RecentMentions>
          <SectionTitle>
            <FaComments />
            Menciones Recientes
          </SectionTitle>
          
          <MentionsList>
            <MentionCard positive>
              <MentionHeader>
                <MentionAuthor>@usuario123</MentionAuthor>
                <MentionTime>Hace 2 horas</MentionTime>
                <SentimentBadge positive>Positivo</SentimentBadge>
              </MentionHeader>
              <MentionContent>
                "Excelente servicio al cliente, resolvieron mi problema rápidamente. ¡Muy satisfecho!"
              </MentionContent>
              <MentionSource>Twitter</MentionSource>
            </MentionCard>

            <MentionCard negative>
              <MentionHeader>
                <MentionAuthor>@cliente456</MentionAuthor>
                <MentionTime>Hace 4 horas</MentionTime>
                <SentimentBadge negative>Negativo</SentimentBadge>
              </MentionHeader>
              <MentionContent>
                "Los tiempos de entrega son demasiado largos, necesitan mejorar esto."
              </MentionContent>
              <MentionSource>Facebook</MentionSource>
            </MentionCard>

            <MentionCard positive>
              <MentionHeader>
                <MentionAuthor>@usuario789</MentionAuthor>
                <MentionTime>Hace 6 horas</MentionTime>
                <SentimentBadge positive>Positivo</SentimentBadge>
              </MentionHeader>
              <MentionContent>
                "Los nuevos productos son increíbles, especialmente la calidad de los materiales."
              </MentionContent>
              <MentionSource>Instagram</MentionSource>
            </MentionCard>
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

const ChartPlaceholder = styled.div`
  background: #F7FAFC;
  height: 300px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4A5568;
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

export default SentimentAnalysis;