import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChartLine, FaDownload, FaChartBar, FaShieldAlt, FaLightbulb } from 'react-icons/fa';
import { getInvestmentRiskData } from '../../services/demoData';
import LineChart from '../../components/charts/LineChart';

const InvestmentRisk = () => {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [marketSegment, setMarketSegment] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!investmentAmount || !marketSegment || !timeframe) return;
      
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        const results = getInvestmentRiskData(investmentAmount, marketSegment, timeframe);
        setAnalysis(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [investmentAmount, marketSegment, timeframe]);

  const handleAnalyze = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      const results = getInvestmentRiskData(investmentAmount, marketSegment, timeframe);
      setAnalysis(results);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <PageContainer>
        <LoadingMessage>Analizando riesgo de inversión...</LoadingMessage>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header>
        <Title>
          <FaChartLine />
          <span>Análisis de Riesgo de Inversión</span>
        </Title>
        <Description>
          Evalúa y analiza los riesgos asociados a tus inversiones
        </Description>
      </Header>

      <Content>
        <ConfigSection>
          <SectionTitle>Configuración del Análisis</SectionTitle>
          
          <ConfigForm onSubmit={handleAnalyze}>
            <FormGroup>
              <Label>Monto de Inversión (€)</Label>
              <Input
                type="number"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
                placeholder="Ej: 50000"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Segmento de Mercado</Label>
              <Select
                value={marketSegment}
                onChange={(e) => setMarketSegment(e.target.value)}
                required
              >
                <option value="">Seleccionar segmento</option>
                <option value="b2b">B2B</option>
                <option value="b2c">B2C</option>
                <option value="ecommerce">E-commerce</option>
                <option value="saas">SaaS</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Horizonte Temporal (meses)</Label>
              <Input
                type="number"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                placeholder="Ej: 12"
                required
              />
            </FormGroup>

            <AnalyzeButton type="submit" disabled={loading}>
              {loading ? 'Analizando...' : 'Analizar Riesgo'}
            </AnalyzeButton>
          </ConfigForm>
        </ConfigSection>

        {analysis ? (
          <ResultsSection>
            <SummarySection>
              <SummaryCard>
                <SummaryIcon><FaChartBar /></SummaryIcon>
                <SummaryValue>{analysis.summary.totalRisk}%</SummaryValue>
                <SummaryLabel>Riesgo Total</SummaryLabel>
              </SummaryCard>
              <SummaryCard>
                <SummaryIcon><FaShieldAlt /></SummaryIcon>
                <SummaryValue>{analysis.summary.potentialReturn}%</SummaryValue>
                <SummaryLabel>Retorno Potencial</SummaryLabel>
              </SummaryCard>
              <SummaryCard>
                <SummaryIcon><FaLightbulb /></SummaryIcon>
                <SummaryValue>{analysis.summary.confidence}%</SummaryValue>
                <SummaryLabel>Confianza</SummaryLabel>
              </SummaryCard>
            </SummarySection>

            <AnalysisGrid>
              <RiskFactorsSection>
                <SectionTitle>Factores de Riesgo</SectionTitle>
                <RiskGrid>
                  {analysis.riskFactors.map(factor => (
                    <RiskCard key={factor.id} level={factor.level}>
                      <RiskName>{factor.name}</RiskName>
                      <RiskScore>{factor.score}%</RiskScore>
                      <RiskTrend trend={factor.trend}>
                        {factor.trend === 'increasing' ? '↑' : 
                         factor.trend === 'decreasing' ? '↓' : '→'}
                      </RiskTrend>
                    </RiskCard>
                  ))}
                </RiskGrid>
              </RiskFactorsSection>

              <MarketAnalysisSection>
                <SectionTitle>Análisis de Mercado</SectionTitle>
                <MarketGrid>
                  <MarketCard>
                    <MarketTitle>Tamaño del Mercado</MarketTitle>
                    <MarketValue>€{analysis.marketAnalysis.size.toLocaleString()}</MarketValue>
                  </MarketCard>
                  <MarketCard>
                    <MarketTitle>Crecimiento</MarketTitle>
                    <MarketValue>{analysis.marketAnalysis.growth}%</MarketValue>
                  </MarketCard>
                  <MarketCard>
                    <MarketTitle>Competencia</MarketTitle>
                    <MarketValue>{analysis.marketAnalysis.competition}%</MarketValue>
                  </MarketCard>
                  <MarketCard>
                    <MarketTitle>Barreras de Entrada</MarketTitle>
                    <MarketValue>{analysis.marketAnalysis.barriers}%</MarketValue>
                  </MarketCard>
                </MarketGrid>
                <ChartContainer>
                  <ChartTitle>Tendencia de Mercado</ChartTitle>
                  <LineChart 
                    data={analysis.marketAnalysis.trends.map(t => ({
                      date: `Mes ${t.month}`,
                      value: t.value
                    }))}
                    color="#77AABD"
                  />
                </ChartContainer>
              </MarketAnalysisSection>
            </AnalysisGrid>

            <RecommendationsSection>
              <SectionTitle>Recomendaciones</SectionTitle>
              <RecommendationsList>
                {analysis.recommendations.map(rec => (
                  <RecommendationCard key={rec.id} type={rec.type}>
                    <RecommendationIcon>
                      <rec.icon />
                    </RecommendationIcon>
                    <RecommendationContent>
                      <RecommendationTitle>{rec.title}</RecommendationTitle>
                      <RecommendationDescription>
                        {rec.description}
                      </RecommendationDescription>
                      <RecommendationDetails>
                        <Detail>
                          <DetailLabel>Impacto:</DetailLabel>
                          <DetailValue>{rec.impact}</DetailValue>
                        </Detail>
                        <Detail>
                          <DetailLabel>Prioridad:</DetailLabel>
                          <DetailValue>{rec.priority}</DetailValue>
                        </Detail>
                        <Detail>
                          <DetailLabel>Plazo:</DetailLabel>
                          <DetailValue>{rec.timeframe}</DetailValue>
                        </Detail>
                      </RecommendationDetails>
                    </RecommendationContent>
                  </RecommendationCard>
                ))}
              </RecommendationsList>
            </RecommendationsSection>

            <RiskMitigationSection>
              <SectionTitle>Estrategias de Mitigación</SectionTitle>
              <MitigationList>
                {analysis.riskAssessment.mitigation.strategies.map((strategy, index) => (
                  <MitigationItem key={index}>
                    <MitigationNumber>{index + 1}</MitigationNumber>
                    <MitigationText>{strategy}</MitigationText>
                  </MitigationItem>
                ))}
              </MitigationList>
              <MitigationEffectiveness>
                Efectividad: {analysis.riskAssessment.mitigation.effectiveness}%
              </MitigationEffectiveness>
            </RiskMitigationSection>
          </ResultsSection>
        ) : (
          <EmptyState>
            <EmptyStateIcon><FaChartLine /></EmptyStateIcon>
            <EmptyStateText>
              Configura los parámetros y ejecuta el análisis para ver los resultados
            </EmptyStateText>
          </EmptyState>
        )}
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
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ConfigSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  color: #2E4756;
  margin-bottom: 1.5rem;
`;

const ConfigForm = styled.form`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

const AnalyzeButton = styled.button`
  background: #2E4756;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #4A7A8C;
  }
`;

const ResultsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

const AnalysisGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;

const RiskFactorsSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const RiskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const RiskCard = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background: ${props => 
    props.level === 'alto' ? '#FEE2E2' :
    props.level === 'medio' ? '#FEF3C7' :
    '#D1FAE5'
  };
`;

const RiskName = styled.h3`
  font-size: 1.1rem;
  color: #2E4756;
  margin-bottom: 1rem;
`;

const RiskScore = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2E4756;
  margin-bottom: 0.5rem;
`;

const RiskTrend = styled.div`
  font-size: 0.9rem;
  color: ${props => 
    props.trend === 'increasing' ? '#DC2626' :
    props.trend === 'decreasing' ? '#059669' :
    '#D97706'
  };
`;

const RecommendationsSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const RecommendationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RecommendationCard = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-left: 4px solid ${props => 
    props.type === 'warning' ? '#DC2626' :
    props.type === 'success' ? '#059669' :
    '#3B82F6'
  };
`;

const RecommendationIcon = styled.div`
  color: ${props => 
    props.type === 'warning' ? '#DC2626' :
    props.type === 'success' ? '#059669' :
    '#3B82F6'
  };
  font-size: 1.2rem;
`;

const RecommendationContent = styled.div`
  flex: 1;
`;

const RecommendationTitle = styled.h4`
  font-size: 1rem;
  color: #2E4756;
  margin-bottom: 0.5rem;
`;

const RecommendationDescription = styled.p`
  font-size: 0.9rem;
  color: #4A5568;
  margin-bottom: 0.5rem;
`;

const RecommendationDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
`;

const DetailLabel = styled.span`
  color: #718096;
  text-transform: capitalize;
`;

const DetailValue = styled.span`
  color: #2E4756;
  font-weight: 500;
`;

const MarketAnalysisSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MarketGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const MarketCard = styled.div`
  padding: 1rem;
  background: #F7FAFC;
  border-radius: 8px;
`;

const MarketTitle = styled.div`
  font-size: 0.9rem;
  color: #718096;
  margin-bottom: 0.5rem;
`;

const MarketValue = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2E4756;
`;

const ChartContainer = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background: #F7FAFC;
  border-radius: 8px;
`;

const ChartTitle = styled.h4`
  color: #2E4756;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const RiskMitigationSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const MitigationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const MitigationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: #F7FAFC;
  border-radius: 8px;
`;

const MitigationNumber = styled.div`
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

const MitigationText = styled.div`
  flex: 1;
  font-size: 0.9rem;
  color: #2E4756;
`;

const MitigationEffectiveness = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #718096;
  margin-top: 1rem;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  border: 1px solid #CBD5E0;
  border-radius: 10px;
  text-align: center;
`;

const EmptyStateIcon = styled.div`
  font-size: 2rem;
  color: #77AABD;
  margin-bottom: 1rem;
`;

const EmptyStateText = styled.div`
  font-size: 1.2rem;
  color: #718096;
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #666;
`;

export default InvestmentRisk;