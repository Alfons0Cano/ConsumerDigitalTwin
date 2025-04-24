import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  FaChartLine,
  FaSync,
  FaPlus,
  FaUsers,
  FaChartBar,
  FaBullhorn
} from 'react-icons/fa';
import { getSocialMediaIntegrationData } from '../../services/demoData';
import LineChart from '../../components/charts/LineChart';

const SocialMediaIntegration = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        const results = getSocialMediaIntegrationData();
        setData(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleConnectPlatform = (platformId) => {
    // Simulate platform connection
    console.log('Connecting platform:', platformId);
  };

  const handleUpdateData = (platformId) => {
    // Simulate data update
    console.log('Updating data for platform:', platformId);
  };

  if (loading) {
    return (
      <PageContainer>
        <LoadingMessage>Conectando con redes sociales...</LoadingMessage>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header>
        <Title>Integración de Redes Sociales</Title>
        <Description>
          Conecta y gestiona todas tus redes sociales desde una única plataforma
        </Description>
      </Header>

      <SummarySection>
        <SummaryCard>
          <SummaryIcon><FaUsers /></SummaryIcon>
          <SummaryValue>{data.summary.totalFollowers}</SummaryValue>
          <SummaryLabel>Seguidores Totales</SummaryLabel>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon><FaChartBar /></SummaryIcon>
          <SummaryValue>{data.summary.averageEngagement}</SummaryValue>
          <SummaryLabel>Engagement Promedio</SummaryLabel>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon><FaBullhorn /></SummaryIcon>
          <SummaryValue>{data.summary.activeCampaigns}</SummaryValue>
          <SummaryLabel>Campañas Activas</SummaryLabel>
        </SummaryCard>
      </SummarySection>

      <Content>
        <MainSection>
          <PlatformsGrid>
            {data.platforms.map(platform => (
              <PlatformCard key={platform.id} connected={platform.connected}>
                <PlatformHeader color={platform.color}>
                  <PlatformIcon>
                    <platform.icon />
                  </PlatformIcon>
                  <PlatformName>{platform.name}</PlatformName>
                  {platform.connected ? (
                    <ConnectedBadge>Conectado</ConnectedBadge>
                  ) : (
                    <ConnectButton onClick={() => handleConnectPlatform(platform.id)}>
                      <FaPlus /> Conectar
                    </ConnectButton>
                  )}
                </PlatformHeader>

                {platform.connected && platform.metrics && (
                  <>
                    <MetricsGrid>
                      <MetricItem>
                        <MetricLabel>Seguidores</MetricLabel>
                        <MetricValue>{platform.metrics.followers}</MetricValue>
                      </MetricItem>
                      <MetricItem>
                        <MetricLabel>Engagement</MetricLabel>
                        <MetricValue>{platform.metrics.engagement}</MetricValue>
                      </MetricItem>
                      <MetricItem>
                        <MetricLabel>Alcance</MetricLabel>
                        <MetricValue>{platform.metrics.reach}</MetricValue>
                      </MetricItem>
                      <MetricItem>
                        <MetricLabel>Crecimiento</MetricLabel>
                        <MetricValue positive>
                          {platform.metrics.growth}
                        </MetricValue>
                      </MetricItem>
                    </MetricsGrid>

                    <ChartContainer>
                      <ChartTitle>Tendencia de Engagement</ChartTitle>
                      <LineChart 
                        data={platform.trends}
                        color={platform.color}
                        height={200}
                      />
                    </ChartContainer>
                  </>
                )}

                {platform.connected && (
                  <ActionButton onClick={() => handleUpdateData(platform.id)}>
                    <FaSync /> Actualizar Datos
                  </ActionButton>
                )}
              </PlatformCard>
            ))}
          </PlatformsGrid>

          <CampaignsSection>
            <SectionHeader>
              <SectionTitle>Campañas Activas</SectionTitle>
              <NewCampaignButton>
                <FaPlus /> Nueva Campaña
              </NewCampaignButton>
            </SectionHeader>

            <CampaignsGrid>
              {data.campaigns.map(campaign => (
                <CampaignCard key={campaign.id}>
                  <CampaignHeader>
                    <CampaignName>{campaign.name}</CampaignName>
                    <StatusBadge status={campaign.status}>
                      {campaign.status}
                    </StatusBadge>
                  </CampaignHeader>

                  <PlatformIcons>
                    {campaign.platforms.map(platformId => {
                      const platform = data.platforms.find(p => p.id === platformId);
                      return (
                        <PlatformIcon key={platformId} color={platform.color}>
                          <platform.icon />
                        </PlatformIcon>
                      );
                    })}
                  </PlatformIcons>

                  <CampaignMetrics>
                    {Object.entries(campaign.metrics).map(([key, value]) => (
                      <CampaignMetric key={key}>
                        <CampaignMetricLabel>{key}:</CampaignMetricLabel>
                        <CampaignMetricValue>{value}</CampaignMetricValue>
                      </CampaignMetric>
                    ))}
                  </CampaignMetrics>

                  {campaign.performance !== null && (
                    <PerformanceBar>
                      <PerformanceLabel>
                        Performance: {campaign.performance}%
                      </PerformanceLabel>
                      <PerformanceProgress width={campaign.performance} />
                    </PerformanceBar>
                  )}
                </CampaignCard>
              ))}
            </CampaignsGrid>
          </CampaignsSection>
        </MainSection>

        <SideSection>
          <InsightsSection>
            <SectionTitle>
              <FaChartLine /> Insights
            </SectionTitle>

            <InsightsList>
              {data.insights.map((insight, index) => {
                const platform = data.platforms.find(p => p.id === insight.platform);
                return (
                  <InsightCard key={index} type={insight.type}>
                    <InsightHeader>
                      <PlatformIcon color={platform.color}>
                        <platform.icon />
                      </PlatformIcon>
                      <InsightType>{insight.type}</InsightType>
                    </InsightHeader>
                    <InsightTitle>{insight.title}</InsightTitle>
                    <InsightDescription>
                      {insight.description}
                    </InsightDescription>
                    <InsightMetrics>
                      {Object.entries(insight.metrics).map(([key, value]) => (
                        <InsightMetric key={key}>
                          <InsightMetricLabel>{key}:</InsightMetricLabel>
                          <InsightMetricValue>{value}</InsightMetricValue>
                        </InsightMetric>
                      ))}
                    </InsightMetrics>
                  </InsightCard>
                );
              })}
            </InsightsList>
          </InsightsSection>
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
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #666;
  font-size: 1.1rem;
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
  gap: 2rem;
`;

const SideSection = styled.div``;

const PlatformsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const PlatformCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const PlatformHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: ${props => props.color}10;
  gap: 1rem;
`;

const PlatformIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: ${props => props.color || '#4A5568'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlatformName = styled.h3`
  font-size: 1.2rem;
  color: #2E4756;
  margin: 0;
  flex: 1;
`;

const ConnectedBadge = styled.span`
  padding: 0.25rem 0.75rem;
  background: #D1FAE5;
  color: #059669;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ConnectButton = styled.button`
  background: #2E4756;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #4A7A8C;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1.5rem;
`;

const MetricItem = styled.div``;

const MetricLabel = styled.div`
  font-size: 0.9rem;
  color: #718096;
  margin-bottom: 0.25rem;
`;

const MetricValue = styled.div`
  font-weight: 600;
  color: ${props => props.positive ? '#059669' : '#2E4756'};
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: none;
  border: none;
  border-top: 1px solid #E2E8F0;
  color: #4A5568;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background: #F7FAFC;
    color: #2E4756;
  }
`;

const CampaignsSection = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  color: #2E4756;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NewCampaignButton = styled.button`
  background: #2E4756;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #4A7A8C;
  }
`;

const CampaignsGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

const CampaignCard = styled.div`
  padding: 1rem;
  background: #F7FAFC;
  border-radius: 8px;
`;

const CampaignHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CampaignName = styled.h4`
  font-size: 1.1rem;
  color: #2E4756;
  margin: 0;
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
  background: ${props => 
    props.status === 'active' ? '#D1FAE5' :
    props.status === 'scheduled' ? '#FEF3C7' :
    '#E2E8F0'
  };
  color: ${props => 
    props.status === 'active' ? '#059669' :
    props.status === 'scheduled' ? '#D97706' :
    '#4A5568'
  };
`;

const PlatformIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const PerformanceBar = styled.div``;

const PerformanceLabel = styled.div`
  font-size: 0.9rem;
  color: #4A5568;
  margin-bottom: 0.5rem;
`;

const PerformanceProgress = styled.div`
  height: 6px;
  background: #E2E8F0;
  border-radius: 3px;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.width}%;
    background: #77AABD;
  }
`;

const InsightsSection = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const InsightsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InsightCard = styled.div`
  padding: 1rem;
  background: ${props => 
    props.type === 'trend' ? '#EBF8FF' :
    props.type === 'opportunity' ? '#F0FFF4' :
    '#FFF5F5'
  };
  border-radius: 8px;
`;

const InsightHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

const InsightType = styled.span`
  font-size: 0.8rem;
  color: #718096;
  text-transform: capitalize;
`;

const InsightTitle = styled.h4`
  font-size: 1rem;
  color: #2E4756;
  margin: 0 0 0.5rem 0;
`;

const InsightDescription = styled.p`
  font-size: 0.9rem;
  color: #4A5568;
  margin: 0;
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

const ChartContainer = styled.div`
  margin: 1.5rem;
  padding: 1rem;
  background: #F7FAFC;
  border-radius: 8px;
`;

const ChartTitle = styled.h4`
  color: #2E4756;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const CampaignMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin: 1rem 0;
`;

const CampaignMetric = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const CampaignMetricLabel = styled.div`
  font-size: 0.7rem;
  color: #718096;
  text-transform: capitalize;
`;

const CampaignMetricValue = styled.div`
  font-size: 0.8rem;
  color: #2E4756;
  font-weight: 500;
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

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #666;
`;

export default SocialMediaIntegration;