import React from 'react';
import styled from 'styled-components';
import { FaChartLine, FaUsers, FaCommentAlt, FaRocket } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header>
        <Title>Panel de Control</Title>
        <SubTitle>Vista general de las métricas clave</SubTitle>
      </Header>

      <MetricsGrid>
        <MetricCard>
          <MetricIcon>
            <FaUsers />
          </MetricIcon>
          <MetricInfo>
            <MetricValue>2,543</MetricValue>
            <MetricLabel>Usuarios Activos</MetricLabel>
          </MetricInfo>
        </MetricCard>

        <MetricCard>
          <MetricIcon>
            <FaChartLine />
          </MetricIcon>
          <MetricInfo>
            <MetricValue>85%</MetricValue>
            <MetricLabel>Tasa de Conversión</MetricLabel>
          </MetricInfo>
        </MetricCard>

        <MetricCard>
          <MetricIcon>
            <FaCommentAlt />
          </MetricIcon>
          <MetricInfo>
            <MetricValue>4.8/5</MetricValue>
            <MetricLabel>Satisfacción</MetricLabel>
          </MetricInfo>
        </MetricCard>

        <MetricCard>
          <MetricIcon>
            <FaRocket />
          </MetricIcon>
          <MetricInfo>
            <MetricValue>12</MetricValue>
            <MetricLabel>Campañas Activas</MetricLabel>
          </MetricInfo>
        </MetricCard>
      </MetricsGrid>

      <ChartsSection>
        <ChartContainer>
          <ChartTitle>Tendencias de Audiencia</ChartTitle>
          {/* Aquí irá el gráfico de tendencias */}
        </ChartContainer>

        <ChartContainer>
          <ChartTitle>Análisis de Sentimiento</ChartTitle>
          {/* Aquí irá el gráfico de sentimiento */}
        </ChartContainer>
      </ChartsSection>

      <RecentActivity>
        <SectionTitle>Actividad Reciente</SectionTitle>
        <ActivityList>
          <ActivityItem>
            <ActivityTime>Hace 2h</ActivityTime>
            <ActivityText>Nueva campaña "Verano 2024" creada</ActivityText>
          </ActivityItem>
          <ActivityItem>
            <ActivityTime>Hace 4h</ActivityTime>
            <ActivityText>Análisis de sentimiento completado para "Campaña Primavera"</ActivityText>
          </ActivityItem>
          <ActivityItem>
            <ActivityTime>Hace 6h</ActivityTime>
            <ActivityText>Nuevos segmentos de mercado identificados</ActivityText>
          </ActivityItem>
        </ActivityList>
      </RecentActivity>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
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

const SubTitle = styled.p`
  color: #666;
  font-size: 1.1rem;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const MetricCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const MetricIcon = styled.div`
  font-size: 2rem;
  color: #77AABD;
  margin-right: 1rem;
`;

const MetricInfo = styled.div``;

const MetricValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2E4756;
`;

const MetricLabel = styled.div`
  color: #666;
  font-size: 0.9rem;
`;

const ChartsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ChartContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 300px;
`;

const ChartTitle = styled.h3`
  color: #2E4756;
  margin-bottom: 1rem;
`;

const RecentActivity = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  color: #2E4756;
  margin-bottom: 1rem;
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ActivityItem = styled.div`
  padding: 1rem;
  border-left: 3px solid #77AABD;
  background: #f8f9fa;
  border-radius: 0 5px 5px 0;
`;

const ActivityTime = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
`;

const ActivityText = styled.div`
  color: #2E4756;
`;

export default Dashboard;