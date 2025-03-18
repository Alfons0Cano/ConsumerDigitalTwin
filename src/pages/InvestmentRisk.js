import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChartLine, FaExclamationTriangle, FaCheckCircle, FaInfoCircle, FaDownload } from 'react-icons/fa';

const InvestmentRisk = () => {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [marketSegment, setMarketSegment] = useState('');
  const [timeframe, setTimeframe] = useState('12');

  const handleAnalyze = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de análisis
  };

  const riskFactors = [
    { id: 1, name: 'Mercado', level: 'alto', score: 85, trend: 'increasing' },
    { id: 2, name: 'Competencia', level: 'medio', score: 65, trend: 'stable' },
    { id: 3, name: 'Tecnológico', level: 'bajo', score: 35, trend: 'decreasing' },
    { id: 4, name: 'Regulatorio', level: 'medio', score: 55, trend: 'stable' },
  ];

  const recommendations = [
    {
      id: 1,
      type: 'warning',
      title: 'Alta Volatilidad del Mercado',
      description: 'Considerar diversificación en diferentes segmentos',
      icon: FaExclamationTriangle,
      priority: 'alta'
    },
    {
      id: 2,
      type: 'success',
      title: 'Oportunidad de Crecimiento',
      description: 'Mercado emergente con potencial de expansión',
      icon: FaCheckCircle,
      priority: 'media'
    },
    {
      id: 3,
      type: 'info',
      title: 'Cambios Regulatorios',
      description: 'Nuevas normativas previstas para Q3 2024',
      icon: FaInfoCircle,
      priority: 'baja'
    },
  ];

  return (
    <PageContainer>
      <Header>
        <Title>
          <FaChartLine />
          <span>Evaluación de Riesgos de Inversión</span>
        </Title>
        <Description>
          Analiza y evalúa los riesgos potenciales de tus inversiones en marketing digital
        </Description>
      </Header>

      <Content>
        <MainSection>
          <AnalysisForm onSubmit={handleAnalyze}>
            <FormGroup>
              <Label>Inversión Total (€)</Label>
              <Input
                type="number"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
                placeholder="Ej: 50000"
              />
            </FormGroup>

            <FormGroup>
              <Label>Segmento de Mercado</Label>
              <Select
                value={marketSegment}
                onChange={(e) => setMarketSegment(e.target.value)}
              >
                <option value="">Seleccionar segmento</option>
                <option value="b2b">B2B</option>
                <option value="b2c">B2C</option>
                <option value="d2c">D2C</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Período de Evaluación (meses)</Label>
              <Select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
              >
                <option value="3">3 meses</option>
                <option value="6">6 meses</option>
                <option value="12">12 meses</option>
                <option value="24">24 meses</option>
              </Select>
            </FormGroup>

            <AnalyzeButton type="submit">
              Analizar Riesgos
            </AnalyzeButton>
          </AnalysisForm>

          <RiskFactorsSection>
            <SectionTitle>Factores de Riesgo</SectionTitle>
            <RiskGrid>
              {riskFactors.map(factor => (
                <RiskCard key={factor.id} level={factor.level}>
                  <RiskName>{factor.name}</RiskName>
                  <RiskScore>{factor.score}%</RiskScore>
                  <RiskMeter>
                    <RiskProgress width={factor.score} level={factor.level} />
                  </RiskMeter>
                  <RiskTrend trend={factor.trend}>
                    Tendencia: {factor.trend === 'increasing' ? '↑' : factor.trend === 'decreasing' ? '↓' : '→'}
                  </RiskTrend>
                </RiskCard>
              ))}
            </RiskGrid>
          </RiskFactorsSection>
        </MainSection>

        <SideSection>
          <SectionTitle>Recomendaciones</SectionTitle>
          <RecommendationsList>
            {recommendations.map(rec => (
              <RecommendationCard key={rec.id} type={rec.type}>
                <RecommendationIcon>
                  <rec.icon />
                </RecommendationIcon>
                <RecommendationContent>
                  <RecommendationTitle>{rec.title}</RecommendationTitle>
                  <RecommendationDescription>
                    {rec.description}
                  </RecommendationDescription>
                  <PriorityTag priority={rec.priority}>
                    Prioridad {rec.priority}
                  </PriorityTag>
                </RecommendationContent>
              </RecommendationCard>
            ))}
          </RecommendationsList>

          <ExportSection>
            <ExportButton>
              <FaDownload /> Exportar Análisis Completo
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

const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SideSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AnalysisForm = styled.form`
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

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  color: #2E4756;
  margin-bottom: 1.5rem;
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

const RiskMeter = styled.div`
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

const RiskProgress = styled.div`
  height: 100%;
  width: ${props => props.width}%;
  background: ${props => 
    props.level === 'alto' ? '#DC2626' :
    props.level === 'medio' ? '#D97706' :
    '#059669'
  };
`;

const RiskTrend = styled.div`
  font-size: 0.9rem;
  color: ${props => 
    props.trend === 'increasing' ? '#DC2626' :
    props.trend === 'decreasing' ? '#059669' :
    '#D97706'
  };
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

const PriorityTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${props => 
    props.priority === 'alta' ? '#FEE2E2' :
    props.priority === 'media' ? '#FEF3C7' :
    '#D1FAE5'
  };
  color: ${props => 
    props.priority === 'alta' ? '#DC2626' :
    props.priority === 'media' ? '#D97706' :
    '#059669'
  };
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

export default InvestmentRisk;